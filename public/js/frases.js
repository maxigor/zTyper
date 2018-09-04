$("#botao-frase").click(function(){
  reiniciaJogo();
  fraseAleatoria();
});

var botaoFraseId = $("#botao-frase-id");
botaoFraseId.on("click", function(){
  escolheFrase();
});


function fraseAleatoria(){

  $("#spinner").toggle();

  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
	  .fail(function(){
	  	var erro = $("#erro");
	  	erro.toggle();
	  	setTimeout(function(){
	  		erro.toggle();
	  	},2000);
	  })
	  .always(function(){
	  	$("#spinner").toggle();
	  });
};


function trocaFraseAleatoria(data){
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);


  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function escolheFrase(){
	var fraseId = $("#frase-id").val();
	var dados = {
		id : fraseId
	};

	$.get("http://local:3000/frases", dados, trocaFrase )
	  .fail(function(){
	  	var erro = $("#erro");
	  	erro.toggle();
	  	setTimeout(function(){
	  		erro.toggle();
	  	},2000);
	  })
	  .always(function(){
	  	$("#spinner").toggle();
	  });

}

function trocaFrase(data){

	console.log(data);

	frase.text(data[dados].texto);
	atualizaTempoInicial();
	atualizaTempoInicial(data[dados.tempo]);
}











