/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



        
        
// *********************************** CREA DOCUMENTO PDF *************************

    function crearPDF(){
     var nomArchivo = document.getElementById("solicitud").value;
        var doc = new jsPDF('p', 'pt', 'letter')

// source can be HTML-formatted string, or a reference
// to an actual DOM element from which the text will be scraped.
, source = $('#imprimir')[0] 

// we support special element handlers. Register them with jQuery-style
// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
// There is no support for any other type of selectors
// (class, of compound) at this time.
                   , specialElementHandlers = {
// element with id of "bypass" - jQuery style selector
                       '#bypassme': function (element, renderer) {
// true = "handled elsewhere, bypass text extraction"
                           return true
                       }
                   }

           margins = {
               top: 10,
               bottom: 60,
               left: 40,
               width: 522
           };
// all coords and widths are in jsPDF instance's declared units
// 'inches' in this case
           doc.fromHTML(
                   source // HTML string or DOM elem ref.
                   , margins.left // x coord
                   , margins.top // y coord
                   , {
                       'width': margins.width // max width of content on PDF
                       , 'elementHandlers': specialElementHandlers
                   },
                   function (dispose) {
// dispose: object with X, Y of the last line add to the PDF
//          this allow the insertion of new lines after html
                       doc.save(nomArchivo + '.pdf');
                   },
                   margins
                   );




cliente();
muestra();
procedencia();
analisis();

doc.setFontSize(20);
doc.text(200, 80, "Solicitud de Análisis");
// ******CLIENTE
doc.setFontSize(12);
doc.text(10, 140, "_____________________________________________________________________________________");
doc.text(40, 160, "Cliente");
doc.text(20, 180, "Solicitud: " + solicitud);
doc.text(200, 180, "Fecha: " + fecha);
doc.text(20, 200, "Cedula: " + cedula);
doc.text(200, 200, "Nombre: " + nombre);
doc.text(400, 200, "Apellido: " + apellido);
doc.text(20, 220, "Telf_Celular: " + telf_celular);
doc.text(200, 220, "Telf_Fijo: " + telf_fijo);
doc.text(400, 220, "Correo: " + correo);
// ****** MUESTRA
doc.text(10, 240, "_____________________________________________________________________________________");
doc.text(40, 260, "Muestra");
doc.text(20, 280, "Cantidad: " + cantidad);
doc.text(200, 280, "Nombre Muestra(s): " + nombre_muestra);
doc.text(20, 300, "Geológica: " + geologica1);
doc.text(150, 300, "Agua: " + agua1);
doc.text(250, 300, "Suelo: " + suelo1);
doc.text(350, 300, "Polvo: " + polvo1);
doc.text(20, 320, "Otro: " + otro_muestra);
// ****** PROCEDENCIA
doc.text(10, 340, "_____________________________________________________________________________________");
doc.text(40, 360, "Procedencia");
doc.text(20, 380, "Estado: " + estado1);
doc.text(150, 380, "Municipio: " + municipio1);
doc.text(350, 380, "Parroquia: " + parroquia1);
// ****** TIPO ANALISIS
doc.text(10, 400, "_____________________________________________________________________________________");
doc.text(40, 420, "Tipo Análisis");
doc.text(20, 440, "Petrografia: " + petrografia1);
doc.text(100, 440, "DRX: " + drx1);
doc.text(200, 440, "MEB: " + meb1);
doc.text(300, 440, "FRX: " + frx1);
doc.text(400, 440, "ICP: " + icp1);
doc.text(20, 460, "Químico: " + quimico1);
doc.text(20, 480, "Elementos Químico: " + elemento_quimico);
doc.text(20, 500, "Otro: " + otro_analisis);
//
doc.text(10, 520, "_____________________________________________________________________________________");
doc.text(20, 540, "Observaciones: " + observaciones);
// ******PIE DE PAGINA
doc.text(10, 740, "_____________________________________________________________________________________");
doc.text(80, 760, "Caracas, Avenidada Lecuna, Parque Central, Torre Oeste, Piso 05/08 ");
doc.text(120, 780, "Teléfono: (0212) 5970815/0816 www.ingeomin.gov.ve");
    }

function cliente(){
 solicitud = document.getElementById("solicitud").value;
 fecha = document.getElementById("fecha").value;
 cedula = document.getElementById("cedula").value;
 nombre = document.getElementById("nombre").value;
 apellido = document.getElementById("apellido").value;
 telf_celular = document.getElementById("telf_celular").value;
 telf_fijo = document.getElementById("telf_fijo").value;
 correo = document.getElementById("correo").value;  
}

function muestra(){
 cantidad = document.getElementById("cantidad").value;
 nombre_muestra = document.getElementById("nombre_muestra").value;    
 geologica1=document.getElementById("geologica").checked;
if(geologica1==true){
    geologica1="X";
}else{
    geologica1="";
}
 agua1=document.getElementById("agua").checked;
if(agua1==true){
    agua1="X";
}else{
    agua1="";
}
 suelo1=document.getElementById("suelo").checked;
if(suelo1==true){
    suelo1="X";
}else{
    suelo1="";
}
 polvo1=document.getElementById("polvo").checked;
if(polvo1==true){
    polvo1="X";
}else{
    polvo1="";
}
 otro_muestra = document.getElementById("otro_muestra").value;
}


function procedencia(){
 estado = document.getElementById("firstChoice");
 estado1 = estado.options[estado.selectedIndex].text
 if(estado1==""){
     alert("Seleccione un estado");
 }
 municipio = document.getElementById("secondChoice");
 municipio1 = municipio.options[municipio.selectedIndex].text;
 if(municipio1==""){
        alert("Seleccione un Municipio");
 }
 parroquia = document.getElementById("thirdChoice");
 parroquia1 = parroquia.options[parroquia.selectedIndex].text;
 if(parroquia1==""){
        alert("Seleccione una Parroquia");
 }
}

function analisis(){
 petrografia1=document.getElementById("petrografia").checked;
if(petrografia1==true){
    petrografia1="X";
}else{
    petrografia1="";
}
 drx1=document.getElementById("drx").checked;
if(drx1==true){
    drx1="X";
}else{
    drx1="";
}
 meb1=document.getElementById("meb").checked;
if(meb1==true){
    meb1="X";
}else{
    meb1="";
}
 frx1=document.getElementById("frx").checked;
if(frx1==true){
    frx1="X";
}else{
    frx1="";
}
 icp1=document.getElementById("icp").checked;
if(icp1==true){
    icp1="X";
}else{
    icp1="";
}
 quimico1=document.getElementById("quimico").checked;
if(quimico1==true){
    quimico1="X";
}else{
    quimico1="";
}
 elemento_quimico = document.getElementById("elemento_quimico").value;
 otro_analisis = document.getElementById("otro_analisis").value;
 observaciones = document.getElementById("observaciones").value;
}
//  ************************************* ABRE VENTANA PARA SELECCIONAR ELEMENTO QUIMICO *******************

var miPopup;
        function abreVentana(){
            miPopup = window.open("tablaPeriodica_Elementos.html","miwin","width=800,height=700,scrollbars=yes, left=50, top=100");
            miPopup.focus();
        }
        
// **************************************** GUARDAR ARCHIVO ************************


                function guardarArchivoTexto(){      
    // grab the content of the form field and place it into a variable
        var nomArchivo = document.getElementById("solicitud").value;
cliente();
muestra();
procedencia();
analisis();
geologica=document.getElementById("geologica").checked;
if (geologica==true) {
        geologica="geologica";
    } else {
        geologica="";
    }
agua=document.getElementById("agua").checked;
if (agua==true) {
        agua="agua";
    } else {
        agua="";
    }
suelo=document.getElementById("suelo").checked;
if (suelo==true) {
        suelo="suelo";
    } else {
        suelo="";
    }
polvo=document.getElementById("polvo").checked;
if (polvo==true) {
        polvo="polvo";
    } else {
        polvo="";
    }

petrografia=document.getElementById("petrografia").checked;
if (petrografia==true) {
        petrografia="petrografia";
    } else {
        petrografia="";
    }
drx=document.getElementById("drx").checked;
if (drx==true) {
        drx="drx";
    } else {
        drx="";
    }
meb=document.getElementById("meb").checked;
if (meb==true) {
        meb="meb";
    } else {
        meb="";
    }
frx=document.getElementById("frx").checked;
if (frx==true) {
        frx="frx";
    } else {
        frx="";
    }
icp=document.getElementById("icp").checked;
if (icp==true) {
        icp="icp";
    } else {
        icp="";
    }
quimico=document.getElementById("quimico").checked;
if (quimico==true) {
        quimico="quimico";
    } else {
        quimico="";
    }

        
    //  create a new Blob (html5 magic) that conatins the data from your form feild
        
        var textFileAsBlob = new Blob([solicitud, "\t", fecha, "\t", cedula, "\t", nombre, "\t", apellido, "\t", telf_celular, "\t", telf_fijo, "\t", correo,
                                    "\t", cantidad, "\t", nombre_muestra, "\t", geologica, "\t", agua, "\t", suelo, "\t", polvo, "\t", otro_muestra, 
                                    "\t", estado1, "\t", municipio1, "\t", parroquia1, 
                                "\t", petrografia, "\t", drx, "\t", meb, "\t", frx, "\t", icp, "\t", quimico, "\t", elemento_quimico, "\t", otro_analisis, "\t", observaciones], {type:'text/plain'});
    // Specify the name of the file to be saved
        var fileNameToSaveAs = (nomArchivo + ".txt");
        
    // Optionally allow the user to choose a file name by providing 
    // an imput field in the HTML and using the collected data here
    // var fileNameToSaveAs = txtFileName.text;
     
    // create a link for our script to 'click'
        var downloadLink = document.createElement("a");
    //  supply the name of the file (from the var above).
    // you could create the name here but using a var
    // allows more flexability later.
        downloadLink.download = fileNameToSaveAs;
    // provide text for the link. This will be hidden so you
    // can actually use anything you want.
        downloadLink.innerHTML = "My Hidden Link";
        
    // allow our code to work in webkit & Gecko based browsers
    // without the need for a if / else block.
        window.URL = window.URL || window.webkitURL;
              
    // Create the link Object.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    // when link is clicked call a function to remove it from
    // the DOM in case user wants to save a second file.
        downloadLink.onclick = destroyClickedElement;
    // make sure the link is hidden.
        downloadLink.style.display = "none";
    // add the link to the DOM
        document.body.appendChild(downloadLink);
        
    // click the new link
        downloadLink.click();
    }
     
    function destroyClickedElement(event)
    {
    // remove the link from the DOM
        document.body.removeChild(event.target);
    }
     
    // EOF
        
       
     