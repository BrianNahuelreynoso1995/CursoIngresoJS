/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//creo la primer variable
	var dividendo = txtIdNumeroDividendo.value;

	// cre la segunda variable
	var divisor = txtIdNumeroDivisor.value;

	// pasar el numero de texto a valor
	dividendo = parseInt(dividendo);

	divisor = parseInt(divisor);

	// se suman las variables
	resultado = dividendo % divisor;

	alert("Su porcentaje es " + resultado );
}
