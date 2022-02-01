/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

var importe;	
var importeFinal;
var descuento;
	//para calcular el nuevo importe deberia sumarle el importe original al aumento
	//el calculo del porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100

	importe =document.getElementById("txtIdImporte").value;
	importe= parseFloat(importe);

descuento = importe * 25 / 100 ;
resultado= importe - descuento;

importeFinal= importe - descuento;

document.getElementById("txtIdResultado").value = importeFinal;
}
