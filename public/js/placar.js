

function inserePlacar() {
  var corpoTabela = $("table").find("tbody");
  var nome = "Max";
  var palavras = $("#contador-palavras").text();

  var linha = novaLinha(nome, palavras);
  corpoTabela.append(linha);
  linha.find(".botao-remover").click(removeLinha);
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
    $(this).parent().parent().remove();
}
