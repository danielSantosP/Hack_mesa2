jQuery(document).ready(function($) {
    

	var Produtos = getProdutos();//pega os usuarios da primeira pagina para preencher a tabela
    var popula = populaSelect2($("#selectProdutos"), Produtos);
});
function populaSelect2(container, data) {
    container.empty();
    var select1 = jQuery('<select name="Produto_idProduto" class="form-control" style="width:100%;">');//criando uma tabela.
    jQuery.each(data, function (rowIndex, r) {//percorre os elementos de data, sendo rowIndex o indice atual do elemento e r o elementos em si(a linha)
        console.log(r[0]);
        if(rowIndex!=0){
        select1.append(jQuery("<option value="+ r[0]+"/>").text(r[1]));
        }
    });
    return container.append(select1);
}

function getProdutos() {
    var xmlHttp = new XMLHttpRequest();//elemento para fazer a requisição
    xmlHttp.open("GET", "http://localhost:2000/produtos/", false);//
    xmlHttp.send(null);
    

    var Data = JSON.parse(xmlHttp.responseText);
    console.log(Data[0]);
    var Produtos = Array();
    Produtos[0] = ["idProduto", "nomeProduto ", "quantidadeProduto", "tamanho", "valorProduto"];//cABEÇALHO
    for (var i = 0; i < Data.length; i++) {//Pegando os elementos de cada user
        var auxiliar = Array();
        auxiliar[0] = Data[i]["idProduto"];
        auxiliar[1] = Data[i]["nomeProduto"];
        auxiliar[2] = Data[i]["valorProduto"];
        auxiliar[3] = Data[i]["quantidadeProduto"];
        auxiliar[4] = Data[i]["tamanho"];
        Produtos[i+1] = auxiliar;
    }
    console.log(Produtos)
    
    return Produtos;
}