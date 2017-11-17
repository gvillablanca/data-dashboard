/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);


function click (){
	var encabezado = document.getElementById('encabezado');
	var user = document.getElementById('user');

	user.addEventListener('click', function(){
		var div = document.createElements('div');

		div.setAtritbutte('id', 'caja');
		div.style.backgroundImage = "url(../../assets/images/perfil.png)";

		encabezado.appendChild(div);
	})
}
