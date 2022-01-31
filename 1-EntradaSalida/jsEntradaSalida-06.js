/*
brian reynoso
E/S ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//creo la primer variable
	var numeroUno = txtIdNumeroUno.value;

	// cre la segunda variable
	var numeroDos = txtIdNumeroDos.value;

	// pasar el numero de texto a valor
	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	// se suman las variables
	resultado = numeroUno + numeroDos;

	alert("Su suma es " + resultado );
}




// txtIdNumeroUno
// txtIdNumeroDos