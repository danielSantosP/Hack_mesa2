jQuery(document).ready(function($) {
    

	var fornecedores = getFornecedores();//pega os usuarios da primeira pagina para preencher a tabela
    var popula = populaSelect($("#selectFornecedores"), fornecedores);
});
function populaSelect(container, data) {
    container.empty();
    var select1 = jQuery('<select name="idFornecedor" class="form-control" style="width:100%;">');//criando uma tabela.
    jQuery.each(data, function (rowIndex, r) {//percorre os elementos de data, sendo rowIndex o indice atual do elemento e r o elementos em si(a linha)
        console.log(r[0]);
        if(rowIndex!=0){
        select1.append(jQuery("<option value="+ r[0]+"/>").text(r[1]));
        }
    });
    return container.append(select1);
}

function getFornecedores() {
    var xmlHttp = new XMLHttpRequest();//elemento para fazer a requisição
    xmlHttp.open("GET", "http://localhost:2000/fornecedores/", false);//
    xmlHttp.send(null);
    

    var Data = JSON.parse(xmlHttp.responseText);
    console.log(Data[0]);
    var fornecedores = Array();
    fornecedores[0] = ["idProduto", "nomeProduto ", "quantidadeProduto", "tamanho", "valorProduto"];//cABEÇALHO
    for (var i = 0; i < Data.length; i++) {//Pegando os elementos de cada user
        var auxiliar = Array();
        auxiliar[0] = Data[i]["idFornecedor"];
        auxiliar[1] = Data[i]["nomeFornecedor"];
        auxiliar[2] = Data[i]["telefone"];
        auxiliar[3] = Data[i]["tamanho"];
        auxiliar[4] = Data[i]["endereco"];
        fornecedores[i+1] = auxiliar;
    }
    console.log(fornecedores)
    
    return fornecedores;
}