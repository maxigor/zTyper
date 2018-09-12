$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(escolheFrase);


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

	$("#spinner").toggle();

	var fraseId = $("#frase-id").val();
	var dados = {
		id: fraseId
	};

	console.log("a ID sendo buscada é : " + fraseId);

	$.get("http://local:3000/frases", dados, trocaFrase)
	  .fail(function(){
	  	 $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
	  })
	  .always(function(){
	  	$("#spinner").toggle();
	  });
}

function trocaFrase(data){
	console.log(data);

	var frase = $("#frase");

	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTamanhoFrase(data.tempo);


}











