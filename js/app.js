/*FUNCION Y VARIABLES son los name*/

function porPantalla(){ 
    var programacion;
    var base_de_datos;
    var entornos_de_desarrollo;
    var lenguaje_de_marcas;
    var suma; 
    var media;

/*CAPTURAR INPUTS*/
programacion=document.getElementById("prg");
base_de_datos=document.getElementById("bd");
entornos_de_desarrollo=document.getElementById("ed");
lenguaje_de_marcas=document.getElementById("lm");
media=document.getElementById("avg");
 
//OPERACIONES se omite la conversion a parsefloat del valor media su resultado es real
suma=parseFloat(prg.value)+parseFloat(bd.value)+parseFloat(ed.value)+parseFloat(lm.value);
media.value=suma/4;

//MUESTRA POR CONSOLA LOS DATOS 
console.log(parseFloat(programacion.value));
console.log(parseFloat(base_de_datos.value));
console.log(parseFloat(entornos_de_desarrollo.value));
console.log(parseFloat(lenguaje_de_marcas.value));

/*RESULTADO POR CONSOLA*/
console.log(suma);
console.log(media);
return false;
}