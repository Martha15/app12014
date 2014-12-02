var correo ='';
var masa ='';
var ingrediente =[];

var cambiar_pagina=function(id){

$(":mobile-pagecontainer").pagecontainer("change",id,{role:"page", transition:"slide"});

};

var regresar_pagina=function(id){

$(":mobile-pagecontainer").pagecontainer("change",id,{role:"page", transition:"slide", reverse:true});

};

$(document).on('pageinit',cuando_inicia);

function cuando_inicia(){

$('#preparar').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();


	correo=$('#correo').val();

	if(correo!==''){

		cambiar_pagina('#pizza-masa');

	}

});




}

$(document).on('pageinit','#pizza-masa', cuando_inicia_masa);

function cuando_inicia_masa(){


$('.masa-wrap').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	masa=$(this).data('masa');

	cambiar_pagina('#pizza-ingredientes');
});

$('#pizza-masa .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#pizza-home');

});

}

$(document).on('pageinit','#pizza-ingredientes', cuando_inicia_ingredientes);

function cuando_inicia_ingredientes(){

	$('.ui-bar').click(function(event){

		if( $(this).hasClass('active') ){


			$(this).removeClass('active');

			var removeItem=$(this).data('ingrediente');;

			ingrediente = jQuery.grep(ingrediente, function(value) {


				return value != removeItem;
			});




	}else{

		$(this).addClass('active');

		var val_ingrediente=$(this).data('ingrediente');

		ingrediente.push(val_ingrediente);


	}

	console.log(ingrediente);

	});


$('#pizza-ingredientes .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#pizza-masa');

});


$('#pizza-ingredientes .next').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	cambiar_pagina('#pizza-pedido');

});

}

//page pedido

$(document).on('pageinit','#pizza-pedido', cuando_inicia_pedidos);

function cuando_inicia_pedidos(){

	//colocar el correo

$('.get-correo').text(correo);

//colocar masa

$('.get-masa').text(masa);

$.each(ingrediente, function(index, val){


	$('ul').append('<li>' +val+ '</li>');
});


$('#pizza-pedido .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#pizza-ingredientes');

});

}


