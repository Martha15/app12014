var correo ='';
var paquetes ='';
var sabores =[];

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

		cambiar_pagina('#cupcakes-paquetes');

	}

});




}

$(document).on('pageinit','#cupcakes-paquetes', cuando_inicia_paquetes);

function cuando_inicia_paquetes(){


$('.paquetes-wrap').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	paquetes=$(this).data('paquetes');

	cambiar_pagina('#cupcakes-sabores');
});

$('#cupcakes-paquetes .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#cupcakes-home');



});

}

$(document).on('pageinit','#cupcakes-sabores', cuando_inicia_sabores);

function cuando_inicia_sabores(){

	$('.ui-bar').click(function(event){

		if( $(this).hasClass('active') ){


			$(this).removeClass('active');

			var removeItem=$(this).data('sabores');;

			sabores = jQuery.grep(sabores, function(value) {


				return value != removeItem;
			});




	}else{

		$(this).addClass('active');

		var val_sabores=$(this).data('sabores');

		sabores.push(val_sabores);


	}

	console.log(sabores);

	});


$('#cupcakes-sabores .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#cupcakes-paquetes');

});


$('#cupcakes-sabores .next').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	cambiar_pagina('#cupcakes-pedido');

});

}

//page pedido

$(document).on('pageinit','#cupcakes-pedido', cuando_inicia_pedidos);

function cuando_inicia_pedidos(){

	//colocar el correo

$('.get-correo').text(correo);

//colocar masa

$('.get-paquetes').text(paquetes);

$.each(sabores, function(index, val){


	$('ul').append('<li>' +val+ '</li>');
});


$('#cupcakes-pedido .back').click(function(e){

	e.stopImmediatePropagation();
	e.preventDefault();

	regresar_pagina('#cupcakes-sabores');

});

}


