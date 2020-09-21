//Creamos el correspondiente objeto Ajax, según el navegador.
function newAjax(){
    if(window.XMLHttpRequest) {
      objetoAjax = new XMLHttpRequest();
    } else{
      objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
      return objetoAjax;
  }
    
//Trae de la base de datos la información del alumno logeado
function loginAjax(alum) {
    let objetoAjax = newAjax();
        objetoAjax.open("GET", `./logic/login.php?alum=${alum}`, true);
        objetoAjax.send();
    
        objetoAjax.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(this.responseText);              
            alumn(json);
          }
        };
  }

//Envia los resultados del alumno para su inserccion
function insertResults(user,number,note,contNice,contError) {
  let objetoAjax = newAjax();
      objetoAjax.open("GET", `./logic/results.php?user=${user}&number=${number}&note=${note}&contNice=${contNice}&contError=${contError}`, true);
      objetoAjax.send();
}

//Consulta las tablas que ha aprobado el alumno
function consultTables(json) {
  let objetoAjax = newAjax();
      objetoAjax.open("GET", `./logic/consult.php?alum=${json.numero}`, true);
      objetoAjax.send();
  
      objetoAjax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let num = this.responseText;
          tables(json,num);
        }
      };
}


//Comprueba la cantidad de alumnos que hay
function alumnsCount(alum) {
  let objetoAjax = newAjax();
      objetoAjax.open("GET", "./logic/alumns.php", true);
      objetoAjax.send();
  
      objetoAjax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let max = JSON.parse(this.responseText); 
          
          /*if (alum < max){
            loginAjax(alum);
          }else {
            let sitio = "infoLogin", message="infoLogin";
            help(sitio,message);
          }
      */
     loginAjax(alum);
      };
  }
}