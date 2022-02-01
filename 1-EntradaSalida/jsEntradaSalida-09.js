/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;	
var nuevoSueldo;
var aumento;
	//para calcular el nuevo sueldo deberia sumarle el sueldo original al aumento
	//el calculo del porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100

	sueldo =document.getElementById("txtIdSueldo").value;
	sueldo= parseFloat(sueldo);

aumento = sueldo * 10 / 100 ;
resultado= sueldo + aumento;

nuevoSueldo= sueldo + aumento;

document.getElementById("txtIdResultado").value = nuevoSueldo;




}
