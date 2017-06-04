(function () {
	var contador = 0;

	var cargarPagina = function () {
		// Envío de To - Do
		$("#tweet").submit(agregarToDo);
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Obtenemos datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();

		// Creamos elementos
		var $postContenedor = $("<article />", { "class": "well" });
		var $postCheck = $("<input type='checkbox' />");
		var $postTexto = $("<p />");

		var identificador = "marcador-" + contador;

		// Personalizamos elementos
		$postCheck.id = identificador;
		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		// Agregarlos al DOM
		$postContenedor.append($postCheck);
		$postContenedor.append($postTexto);

		// Agregarlo a un elemento existente para visualizarlo
		$contenedor.prepend($postContenedor);


		contador++;
	};

	// Cuando carga la página
	$(document).ready(cargarPagina);
})();
