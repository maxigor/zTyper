
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var reiniciar = $("#reset");
var frase = $(".frase").text();

$(function(){  ///mesma coisa que $(document).ready(function(){ });
  atualizaTamanhoFrase();
  contagemCaracteres();
  inicializaTempo();
  reiniciaJogo();
  comparaTexto();
});


//conta quantos caracteres tem na frase
function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numeroPalavras);
}

//conta quantos palavras e letras tem na frase
function contagemCaracteres(){
  campo.on("input", function(){
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdLetras = conteudo.length;
    $("#contador-letras").text(qtdLetras);
  })
}

//inciializa o tempo do jogo
function inicializaTempo(){
  campo.one("focus", function(){
    var tempoRestante = $("#tempo-digitacao").text();
    var cronometroID = setInterval(function(){
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      reiniciar.attr("disabled", true);

      if(tempoRestante < 1 ) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
        campo.toggleClass("campo-desativado");
        reiniciar.attr("disabled", false);
        inserePlacar();
      }
    }, 1000);
  });
}


//reinicia o tempo, caracteres e limpa o textarea
function reiniciaJogo(){
  reiniciar.click(function(){
    $("#tempo-digitacao").text(tempoInicial);
    $(".campo-digitacao").val("");
    $("#contador-palavras").text("0");
    $("#contador-letras").text("0");
    campo.toggleClass("campo-desativado");
    campo.attr("disabled", false);
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
    inicializaTempo();
  });
}

function comparaTexto(){
  campo.on("input", function(){
    var frase = $(".frase").text();
    var digitado = campo.val();
    var comparacao = frase.startsWith(digitado);
    if (comparacao) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}
