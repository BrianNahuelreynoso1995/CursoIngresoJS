/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	//creo la primer variable
	var numeroUno = txtIdNumeroUno.value;

	// cre la segunda variable
	var numeroDos = txtIdNumeroDos.value;

	// pasar el numero de texto a valor
	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	// se suman las variables
	resultado = numeroUno - numeroDos;

	alert("la resta es " + resultado );
}

function multiplicar()
{ 
	//creo la primer variable
	var numeroUno = txtIdNumeroUno.value;

	// cre la segunda variable
	var numeroDos = txtIdNumeroDos.value;

	// pasar el numero de texto a valor
	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	// se suman las variables
	resultado = numeroUno * numeroDos;

	alert("la multiplicacion es " + resultado );
}

function dividir()
{
	//creo la primer variable
	var numeroUno = txtIdNumeroUno.value;

	// cre la segunda variable
	var numeroDos = txtIdNumeroDos.value;

	// pasar el numero de texto a valor
	numeroUno = parseInt(numeroUno);

	numeroDos = parseInt(numeroDos);

	// se suman las variables
	resultado = numeroUno / numeroDos;

	alert("la division es " + resultado );
}