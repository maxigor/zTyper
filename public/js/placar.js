function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var nome = "Max";
  var palavras = $("#contador-palavras").text();

  var linha = novaLinha(nome, palavras);
  corpoTabela.append(linha);
  linha.find(".botao-remover").click(removeLinha);

  $(".placar").slideDown(500);
  scrollPlacar();

}

function novaLinha(nome, palavras) {
  var linha = $("<tr>");
  var colunaNome = $("<td>").text(nome);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").attr("href", "#").addClass("botao-remover");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");


  link.append(icone);
  colunaRemover.append(link);

  linha.append(colunaNome);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}


function removeLinha(event){
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut();
    setTimeout(function() {
      linha.remove();
    },1000);
}


$("#botao-placar").click(mostraPlacar);

function mostraPlacar(){
     $(".placar").stop().slideToggle(600);
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}
