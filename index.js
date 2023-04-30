
 
// la funcion mostrarimgyparrafo() es para mostrar la imagen y el parrafo que esta en el html y ocultar el textarea y el boton copiar caundo se carga la pagina
function mostrarimgyparrafo(){
    let elemtxtarea=document.getElementById("textoEncriptado");
    let elembotoncopiar=document.getElementById("botoncopiar");
    elemtxtarea.style.display = "none";
    elembotoncopiar.style.display = "none";
    
}
// la funcion ocultarimgyparrafo() es para ocultar la imagen y el parrafo que esta en el html y mostrar el textarea y el boton copiar 
 function ocultarimgyparrafo(){
    let elemtxtarea=document.getElementById("textoEncriptado");
    let elembotoncopiar=document.getElementById("botoncopiar");
    let elemimagen=document.getElementById("img");
    let elemTitutlo=document.getElementById("tituloh2");
    let elemParrafo=document.getElementById("ptxt");
    let elemtextodelicono=document.getElementById("textodeIcon");
    elemtxtarea.style.display = "block";
    elembotoncopiar.style.display = "block";
    elemimagen.style.display = "none";
    elemTitutlo.style.display = "none";
    elemParrafo.style.display = "none";
    elemtextodelicono.style.display = "none";
}
// la funcion Encriptar() es para encriptar el texto que esta en el textarea y mostrarlo en el textarea que esta en el html mediante el click del boton Encriptar
function Encriptar(){
    ocultarimgyparrafo();
    remplazar();    
}

function remplazar(){
    let elemtexto=document.getElementById("texto-input").value.toLowerCase();
    let elemtxtarea=document.getElementById("textoEncriptado");

    // lo que esta debtro de elemtexto vamos a remplazar por lo que esta dentro de las comillas del replace y se va a guardar en txtaEncriptar despues de cada remplazo se guarda en la misma variable esto se hace si para evitar que se pierda el texto encriptado anterior y se vaya sobre escribiendo
    let txtaEncriptar=elemtexto.replace(/e/img,"enter");
    txtaEncriptar=txtaEncriptar.replace(/i/img,"imes");
    txtaEncriptar=txtaEncriptar.replace(/a/img,"ai");
    txtaEncriptar=txtaEncriptar.replace(/o/img,"ober");
    txtaEncriptar=txtaEncriptar.replace(/u/img,"ufat");
//
    elemtxtarea.value=txtaEncriptar;


}

function Desencriptar(){
    ocultarimgyparrafo();
    let elemtexto=document.getElementById("texto-input").value.toLowerCase();
    let elemtxtarea=document.getElementById("textoEncriptado");

    let txtaDesencriptar=elemtexto.replace(/enter/img,"e");
    txtaDesencriptar=txtaDesencriptar.replace(/imes/img,"i");
    txtaDesencriptar=txtaDesencriptar.replace(/ai/img,"a");
    txtaDesencriptar=txtaDesencriptar.replace(/ober/img,"o");
    txtaDesencriptar=txtaDesencriptar.replace(/ufat/img,"u");

    elemtxtarea.value=txtaDesencriptar;
}

 function copiar(){
    let elemtxtarea=document.getElementById("textoEncriptado");
    let butoncopiar=document.getElementById("botoncopiar");
    elemtxtarea.select();
    navigator.clipboard.writeText(elemtxtarea.value);
    
}