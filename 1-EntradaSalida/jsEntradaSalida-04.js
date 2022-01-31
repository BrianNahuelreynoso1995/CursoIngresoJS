/* 
Brian reynoso 
E/S ejercicio 4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro la variable
	var nombreIngresado;

	//guardo la variable
	nombreIngresado = prompt ("ingrese su nombre");
	
	//asigno nombre a la caja de texto

	txtIdNombre.value = nombreIngresado


	// doy valor a la variable

	alert("su nombre es " + nombreIngresado);
}

//txtIdNombre
