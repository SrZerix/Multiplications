window.addEventListener("load",login());

/* Crea los nodos del login y envia el número de lista introducido por el usuario*/

function login(){   

let main = document.getElementById("mainContainer");

    let articleMain = document.createElement("div");
    articleMain.setAttribute("id","articleMain");

        let titleLogin = document.createElement("h3");
        titleLogin.setAttribute("style","margin-bottom:20px");

            titleLogin.appendChild(document.createTextNode("¡Bienvenido!"));
        

        let parraf1 = document.createElement("p");
        parraf1.setAttribute("class","parrafLogin");

            parraf1.appendChild(document.createTextNode("Vamos a ver quien eres. Por favor, escribe tu número de lista."));
        

        let parraf2 = document.createElement("p");
        parraf2.setAttribute("class","parrafLogin");

            parraf2.appendChild(document.createTextNode("Si tienes alguna duda, puedes preguntarle al camaleón en todo momento."));


        let hr = document.createElement("hr")
        hr.setAttribute("style","margin-bottom:10px; margin-top:10px; color:#a72461;");


        let div = document.createElement("div");
        div.setAttribute("style","display:flex; justify-content:center; margin-bottom:10px;")

            div.appendChild(document.createTextNode("Tu número de lista"));
                
                let inputNumber = document.createElement("input");
                inputNumber.setAttribute("style","max-width:50px; margin-left:15px; text-align:center;");
                inputNumber.setAttribute("class","inputTable");
                inputNumber.setAttribute("value","");

            div.appendChild(inputNumber);


        let botonSubmit = document.createElement("button");
        botonSubmit.setAttribute("class","boton");
        botonSubmit.setAttribute("id","buttonSubmitLogin");
        botonSubmit.appendChild(document.createTextNode("Entrar"));


    articleMain.appendChild(titleLogin);

    articleMain.appendChild(parraf1);

    articleMain.appendChild(parraf2);

    articleMain.appendChild(hr)

    articleMain.appendChild(div);

    articleMain.appendChild(botonSubmit);

main.appendChild(articleMain);

    document.getElementById("footerImg").addEventListener("click",(()=>{let sitio = "infoLogin", message = "infoLogin";  help(sitio, message);}));

    document.getElementById("buttonSubmitLogin").addEventListener("click",(()=>{

        if (inputNumber.value != "" && !isNaN(inputNumber.value) && inputNumber.value <= 11){
            
            let alum = inputNumber.value;

            alumnsCount(alum);

        }else{

            let sitio = "infoLogin", message = "infoLogin";
            inputNumber.value = "";
            help(sitio, message);
        }

    }));
    
}


//Borra los nodos del contenido principal.

function clearDOM(){

 
    let articleMain = document.getElementById("articleMain");

        let nodos = articleMain.childNodes;

            for (let i = 1; i<nodos.length; i++){
                    articleMain.removeChild(nodos[i]);
                    i--;
            }
            
    if (document.getElementById("cloudImgLogin") || document.getElementById("cloudImgMain") ) {

        let mainContainer = document.getElementById("mainContainer");

        let nodosMain = mainContainer.childNodes;

        mainContainer.removeChild(nodosMain[3]);
        mainContainer.removeChild(nodosMain[2]);
    }

    let footer = document.getElementById("footer");

            let id = "footerImg";

            let src = "images/footer.webp"

            let height = "125px"

            let width = "200px"

            let alt = "footer";

        footer.removeChild(document.getElementById("footerImg"));

        let footerImg = document.createElement("img");
            footerImg.setAttribute("id",id);
            footerImg.setAttribute("src",src);
            footerImg.setAttribute("height",height);
            footerImg.setAttribute("width",width);
            footerImg.setAttribute("alt",alt);
        
        footer.appendChild(footerImg);
}


//Carga la información del alumno y le muestra las tablas

function alumn(json){

    clearDOM();

    let articleMain = document.getElementById("articleMain");

        let nodos = articleMain.childNodes;

            let h3 = document.createElement("h3");

            h3.appendChild(document.createTextNode(`Hola ${json.nombre} ${json.apellidos}`));

    articleMain.replaceChild(h3,nodos[0]);


        let parraf = document.createElement("p");
            parraf.setAttribute("style","margin-top:10px");

            parraf.appendChild(document.createTextNode("Elige la tabla que quieres ver."));

    articleMain.appendChild(parraf);

        let table = document.createElement("table");
            table.setAttribute("id","numberTable");

            let row1 = document.createElement("tr");

                let column1 = document.createElement("td");

                    let image1 = document.createElement("img");
                        image1.setAttribute("src","images/one.webp");
                        image1.setAttribute("alt","numberOne");
                        image1.setAttribute("id","numberOne");


                let column2 = document.createElement("td");
                
                    let image2 = document.createElement("img");
                        image2.setAttribute("src","images/two.webp");
                        image2.setAttribute("alt","numberTwo");
                        image2.setAttribute("id","numberTwo");
                        

                let column3 = document.createElement("td");

                    let image3 = document.createElement("img");
                        image3.setAttribute("src","images/three.webp");
                        image3.setAttribute("alt","numberThree");
                        image3.setAttribute("id","numberThree");



                column1.appendChild(image1);
                column2.appendChild(image2);
                column3.appendChild(image3);
                
                row1.appendChild(column1);
                row1.appendChild(column2);
                row1.appendChild(column3);

                
            let row2 = document.createElement("tr");

            let column4 = document.createElement("td");

                let image4 = document.createElement("img");
                    image4.setAttribute("src","images/four.webp");
                    image4.setAttribute("alt","numberFour");
                    image4.setAttribute("id","numberFour");



            let column5 = document.createElement("td");
            
                let image5 = document.createElement("img");
                    image5.setAttribute("src","images/five.webp");
                    image5.setAttribute("alt","numberFive");
                    image5.setAttribute("id","numberFive");



            let column6 = document.createElement("td");

                let image6 = document.createElement("img");
                    image6.setAttribute("src","images/Six.webp");
                    image6.setAttribute("alt","numberSix");
                    image6.setAttribute("id","numberSix");



            column4.appendChild(image4);
            column5.appendChild(image5);
            column6.appendChild(image6);
            
            row2.appendChild(column4);
            row2.appendChild(column5);
            row2.appendChild(column6);


            let row3 = document.createElement("tr");

            let column7 = document.createElement("td");

                let image7 = document.createElement("img");
                    image7.setAttribute("src","images/seven.webp");
                    image7.setAttribute("alt","numberSeven");
                    image7.setAttribute("id","numberSeven");



            let column8 = document.createElement("td");
            
                let image8 = document.createElement("img");
                    image8.setAttribute("src","images/eight.webp");
                    image8.setAttribute("alt","numberEight");
                    image8.setAttribute("id","numberEight");



            let column9 = document.createElement("td");

                let image9 = document.createElement("img");
                    image9.setAttribute("src","images/nine.webp");
                    image9.setAttribute("alt","numberNine");
                    image9.setAttribute("id","numberNine");


            column7.appendChild(image7);
            column8.appendChild(image8);
            column9.appendChild(image9);
            
            row3.appendChild(column7);
            row3.appendChild(column8);
            row3.appendChild(column9);

            table.appendChild(row1);
            table.appendChild(row2);
            table.appendChild(row3);

    articleMain.appendChild(table);

consultTables(json);

    document.getElementById("footerImg").addEventListener("click",(()=>{let sitio = "mainTables", message = "mainTables";  help(sitio, message);}));

}

//Controla las tablas que tiene aprobadas el alumno

function tables(json,tables){

    document.getElementById("numberOne").addEventListener("click",(()=>{let number = 1, user = json.numero; createTable(number,user);}));

    let image2 = document.getElementById("numberTwo");
    let image3 = document.getElementById("numberThree");
    let image4 = document.getElementById("numberFour");
    let image5 = document.getElementById("numberFive");
    let image6 = document.getElementById("numberSix");
    let image7 = document.getElementById("numberSeven");
    let image8 = document.getElementById("numberEight");
    let image9 = document.getElementById("numberNine");

    image2.setAttribute("class","trans");
    image3.setAttribute("class","trans");
    image4.setAttribute("class","trans");
    image5.setAttribute("class","trans");
    image6.setAttribute("class","trans");
    image7.setAttribute("class","trans");
    image8.setAttribute("class","trans");
    image9.setAttribute("class","trans");

    if (tables == 2) {
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.setAttribute("class","trans");
        image4.setAttribute("class","trans");
        image5.setAttribute("class","trans");
        image6.setAttribute("class","trans");
        image7.setAttribute("class","trans");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");
    
    } else if (tables == 3){
    
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.setAttribute("class","trans");
        image5.setAttribute("class","trans");
        image6.setAttribute("class","trans");
        image7.setAttribute("class","trans");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");

    } else if (tables == 4){

        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.setAttribute("class","trans");
        image6.setAttribute("class","trans");
        image7.setAttribute("class","trans");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");
    
    } else if (tables == 5){

        document.getElementById("numberFive").addEventListener("click",(()=>{let number = 5, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.removeAttribute("class","");
        image6.setAttribute("class","trans");
        image7.setAttribute("class","trans");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");

    } else if (tables == 6){    
        
        document.getElementById("numberSix").addEventListener("click",(()=>{let number = 6, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFive").addEventListener("click",(()=>{let number = 5, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.removeAttribute("class","");
        image6.removeAttribute("class","");
        image7.setAttribute("class","trans");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");

    } else if (tables == 7){  

        document.getElementById("numberSeven").addEventListener("click",(()=>{let number = 7, user = json.numero; createTable(number,user);}));
        document.getElementById("numberSix").addEventListener("click",(()=>{let number = 6, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFive").addEventListener("click",(()=>{let number = 5, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.removeAttribute("class","");
        image6.removeAttribute("class","");
        image7.removeAttribute("class","");
        image8.setAttribute("class","trans");
        image9.setAttribute("class","trans");

    } else if (tables == 8){

        document.getElementById("numberEight").addEventListener("click",(()=>{let number = 8, user = json.numero; createTable(number,user);}));
        document.getElementById("numberSeven").addEventListener("click",(()=>{let number = 7, user = json.numero; createTable(number,user);}));
        document.getElementById("numberSix").addEventListener("click",(()=>{let number = 6, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFive").addEventListener("click",(()=>{let number = 5, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.removeAttribute("class","");
        image6.removeAttribute("class","");
        image7.removeAttribute("class","");
        image8.removeAttribute("class","");
        image9.setAttribute("class","trans");
   
    } else if (tables == 9){    
       
        document.getElementById("numberNine").addEventListener("click",(()=>{let number = 9, user = json.numero; createTable(number,user);}));
        document.getElementById("numberEight").addEventListener("click",(()=>{let number = 8, user = json.numero; createTable(number,user);}));
        document.getElementById("numberSeven").addEventListener("click",(()=>{let number = 7, user = json.numero; createTable(number,user);}));
        document.getElementById("numberSix").addEventListener("click",(()=>{let number = 6, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFive").addEventListener("click",(()=>{let number = 5, user = json.numero; createTable(number,user);}));
        document.getElementById("numberFour").addEventListener("click",(()=>{let number = 4, user = json.numero; createTable(number,user);}));
        document.getElementById("numberThree").addEventListener("click",(()=>{let number = 3, user = json.numero; createTable(number,user);}));
        document.getElementById("numberTwo").addEventListener("click",(()=>{let number = 2, user = json.numero; createTable(number,user);}));
        
        image2.removeAttribute("class","");
        image3.removeAttribute("class","");
        image4.removeAttribute("class","");
        image5.removeAttribute("class","");
        image6.removeAttribute("class","");
        image7.removeAttribute("class","");
        image8.removeAttribute("class","");
        image9.removeAttribute("class","");
    
    }
}

//Crea los botones sobre las tablas de multiplicación, junto a las mismas tablas.

function createTable(number,user){

    clearDOM();

    let mainContainer = document.getElementById("articleMain");


        let learnButton = document.createElement("button");

            learnButton.setAttribute("class","botonTable");

            learnButton.setAttribute("id","learnButton");

            learnButton.appendChild(document.createTextNode("Aprender"));

        let lessonButton = document.createElement("button");

            lessonButton.setAttribute("class","botonTable");

            lessonButton.setAttribute("id","lessonButton");

            lessonButton.appendChild(document.createTextNode("Repasar"));

  

        let buttonBack = document.createElement("button");

        buttonBack.setAttribute("class","boton");

        buttonBack.setAttribute("id","buttonBack");

        buttonBack.appendChild(document.createTextNode("Volver atrás"));


    mainContainer.appendChild(learnButton);
    
    mainContainer.appendChild(lessonButton);

        let divBack = document.createElement("div");

            divBack.setAttribute("style","width:100%;");

        divBack.appendChild(buttonBack);    

    mainContainer.appendChild(divBack);


    document.getElementById("buttonBack").addEventListener("click",(()=>{

        clearDOM();

        alumnsCount(user);

        }));

    document.getElementById("footerImg").addEventListener("click",(()=>{let sitio = "buttonsTable", message = "buttonsTable";  help(sitio, message);}));

    document.getElementById("learnButton").addEventListener("click",(()=>{

        clearDOM();

        let mainContent = document.getElementById("articleMain");
            
            let h4 = document.createElement("h4");

                h4.setAttribute("style","color:#a72461; margin-top:10px; margin-bottom:10px");

                h4.appendChild(document.createTextNode(`Tabla del ${number}`));

        mainContent.appendChild(h4);
        

            for (let i=0; i<11; i++){

                let parraf = document.createElement("p");
                    parraf.setAttribute("class","parrafTable");

                    let result = number * i;

                    let text = `${number} x ${i} = ${result}`;

                parraf.appendChild(document.createTextNode(text));

        mainContent.appendChild(parraf);

        }

            let buttonBack = document.createElement("button");

                buttonBack.setAttribute("class","boton");

                buttonBack.setAttribute("id","buttonBack");

                buttonBack.appendChild(document.createTextNode("Volver atrás"));

        mainContent.appendChild(buttonBack);

        document.getElementById("buttonBack").addEventListener("click",(()=>{
            
            clearDOM();

            alumnsCount(user);

        }));

        
    document.getElementById("footerImg").addEventListener("click",(()=>{let sitio = "learnButton", message = "learnButton";  help(sitio, message);}));

    }));

    document.getElementById("lessonButton").addEventListener("click",(()=>{

        clearDOM();

        let mainContent = document.getElementById("articleMain");
                
            let h4 = document.createElement("h4");

                h4.setAttribute("style","color:#a72461; margin-top:10px; margin-bottom:10px");

                h4.appendChild(document.createTextNode(`Tabla del ${number}`));

        mainContent.appendChild(h4);
        

        for (let i=0; i<11; i++){
            
                let span = document.createElement("span");
                    span.setAttribute("style","display:flex; justify-content:center; padding:5px;");

                    let parraf = document.createElement("p");
                        parraf.setAttribute("class","parrafTable");

                        let text = `${number} x ${i} =`;

                        let input = document.createElement("input");
                            input.setAttribute("class","inputTable");
                            input.setAttribute("value","");

                    parraf.appendChild(document.createTextNode(text));

                span.appendChild(parraf);

                span.appendChild(input);

        mainContent.appendChild(span);
        }

        
            let buttonResolve = document.createElement("button");

            buttonResolve.setAttribute("style","margin-right:10px");

            buttonResolve.setAttribute("class","boton");

            buttonResolve.setAttribute("id","buttonResolve");

            buttonResolve.appendChild(document.createTextNode("Corregir"));

        mainContent.appendChild(buttonResolve);

                let buttonBack = document.createElement("button");

                buttonBack.setAttribute("class","boton");

                buttonBack.setAttribute("id","buttonBack");

                buttonBack.appendChild(document.createTextNode("Volver atrás"));

        mainContent.appendChild(buttonBack);

    document.getElementById("buttonBack").addEventListener("click",(()=>{
                    
        clearDOM();

        alumnsCount(user);

    }));

    document.getElementById("buttonResolve").addEventListener("click",(()=>{

        let results = document.getElementsByTagName("input");

        let spans = document.getElementsByTagName("span");

        let contNice = 0;

        let contError = 0;

        
        for (let i = 0; i < 11; i++){

            let realResult = number * i;

            if (spans[i].childNodes.length == 3){

                spans[i].removeChild(spans[i].childNodes[3]);
            }

            if (results[i].value != ""  && !isNaN(results[i].value)){

                if (results[i].value == realResult){

                    let img = document.createElement("img");
                        img.setAttribute("class","imgResolve");
                        img.setAttribute("src","./images/tick.webp");
                        img.setAttribute("alt","Tick");


                    spans[i].appendChild(img);

                    contNice++;

                } else {

                    let img = document.createElement("img");
                    img.setAttribute("class","imgResolve");
                    img.setAttribute("src","./images/cross.webp");
                    img.setAttribute("alt","Cross");


                spans[i].appendChild(img);

                    contError++;

                }
            } else {contError = 1000}

        }

    if (contError >= 1000){

        info = "Tienes de escribir cada resultado en su casilla. Comprueba que los has escrito todos y que son números.";

    } else if (contNice > 9) {

        info = `Has acertado: ${contNice}. Has fallado: ${contError}. ¡Has aprobado! Ya puedes aprender la siguiente tabla.`;

    } else {

        info = `Has acertado: ${contNice}. Has fallado: ${contError}. Has suspendido. No te desanimes, la próxima vez será.`;
    
    }

    cloud = './images/cloudReverse.webp';

    idCloud = "cloudImgMain";

    idParraf = "parrafHelpMain";


    let mainContainer = document.getElementById("mainContainer");

        let cloudImg = document.createElement("img");
        cloudImg.setAttribute("src",cloud);
        cloudImg.setAttribute("alt","Cloud to help");
        cloudImg.setAttribute("id",idCloud);
    
    mainContainer.appendChild(cloudImg);

    if (document.getElementById("parrafHelpMain")){
        
        mainContainer.removeChild(document.getElementById("parrafHelpMain"));
    }
    
       let parrafHelp = document.createElement("p");
       parrafHelp.appendChild(document.createTextNode(info));
       parrafHelp.setAttribute("id",idParraf); 
    
    mainContainer.appendChild(parrafHelp);

    let note = 10 - contError;

    if (contNice != 0 && contError != 0 || contNice == 11) {insertResults(user,number,note,contNice,contError);}

    }));

    document.getElementById("footerImg").addEventListener("click",(()=>{let sitio = "lessonButton", message = "lessonButton";  help(sitio, message);}));

        }));
}


//Crea todo lo relacionado con las ayudas que da el camaleón del footer.

function help(sitio, message){

    let info, cloud;

    if (message == "infoLogin") {

        info = "Escribe tu número de lista en el sitio que te marca la flecha. Luego, pulsa el botón 'Entrar' que hay debajo.";
    
    } else if (message == "mainTables") {

        info = "Elige la tabla que quieres aprender pulsando sobre su número. Los números en gris no han sido desbloqueados todavía.";

    } else if (message == "buttonsTable") {

        info = "Elige la opción que deseas. Te recomiendo aprender bien una tabla antes de repasarla.";

    } else if (message == "learnButton") {

        info = "Aquí puedes ver la tabla de multiplicación que has elegido. Aprendela y después vuelve atrás con el botón inferior."

    } else if (message == "lessonButton") {

        info = "Rellena cada resultado con su respuesta. Después, déjame a mí corregirlo. ¡Necesitas nueve aciertos para aprobar!";

    }

    if (sitio == "infoLogin"){

        cloud = './images/cloud.webp';

        idCloud = "cloudImgLogin";

        idParraf = "parrafHelpLogin";

    } else if (sitio == "mainTables") {

        cloud = "./images/cloudReverse.webp";
        
        idCloud = "cloudImgMain";

        idParraf = "parrafHelpMain";

    }  else if (sitio == "buttonsTable") {

        cloud = './images/cloud.webp';

        idCloud = "cloudImgLogin";

        idParraf = "parrafHelpLogin";

    } else if (sitio == "learnButton") {

        cloud = './images/cloudReverse.webp';

        idCloud = "cloudImgMain";

        idParraf = "parrafHelpMain";

    } else if (sitio == "lessonButton") {

        cloud = './images/cloudReverse.webp';

        idCloud = "cloudImgMain";

        idParraf = "parrafHelpMain";

    }

        let mainContainer = document.getElementById("mainContainer");

            let cloudImg = document.createElement("img");
            cloudImg.setAttribute("src",cloud);
            cloudImg.setAttribute("alt","Cloud to help");
            cloudImg.setAttribute("id",idCloud);
        
        mainContainer.appendChild(cloudImg);
        
           let parrafHelp = document.createElement("p");
           parrafHelp.appendChild(document.createTextNode(info));
           parrafHelp.setAttribute("id",idParraf); 
        
        mainContainer.appendChild(parrafHelp);

    
    if (sitio == "infoLogin"){

    let arrowImg = document.createElement("img");
    arrowImg.setAttribute("src","./images/arrowLeft.webp");
    arrowImg.setAttribute("alt","Arrow to help");
    arrowImg.setAttribute("id","arrowImg");


    let articleMain = document.getElementById("articleMain");
        let mainChild = articleMain.childNodes;
            let node = mainChild[4];
                let nodeChilds = node.childNodes;
        
    if (document.getElementById("arrowImg")){node.removeChild(nodeChilds[2]);}       

    node.appendChild(arrowImg);            

    }

}