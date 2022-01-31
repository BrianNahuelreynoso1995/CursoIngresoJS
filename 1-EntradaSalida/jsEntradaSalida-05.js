/*
brian reynoso
E/S ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//creo la primer variable
	var nombreIngresado;

	//creo la segunda variable
	var edadIngresada;

	//uso lo utilizado en el ejercicio 3
	nombreIngresado = document.getElementById ("txtIdNombre").value;
	edadIngresada = document.getElementById ("txtIdEdad").value;

	//uno las variable
	alert("su nombre es " + nombreIngresado + " tiene " + edadIngresada + " años ");
}

