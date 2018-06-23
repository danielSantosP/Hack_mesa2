jQuery(document).ready(function($) {
    function getProdutos() {
        var xmlHttp = new XMLHttpRequest();//elemento para fazer a requisição
        xmlHttp.open("GET", "http://localhost:2000/produtos/", false);//
        xmlHttp.send(null);
        
    
        var Data = JSON.parse(xmlHttp.responseText);
        console.log(Data[0]);
        var produtos = Array();
        produtos[0] = ["idProduto", "nomeProduto ", "quantidadeProduto", "tamanho", "valorProduto"];//cABEÇALHO
        for (var i = 0; i < Data.length; i++) {//Pegando os elementos de cada user
            var auxiliar = Array();
            auxiliar[0] = Data[i]["idProduto"];
            auxiliar[1] = Data[i]["nomeProduto"];
            auxiliar[2] = Data[i]["quantidadeProduto"];
            auxiliar[3] = Data[i]["tamanho"];
            auxiliar[4] = Data[i]["valorProduto"];
            produtos[i+1] = auxiliar;
        }
    
        
        return produtos;
    }

});
function criarTabela(container, data) {
    container.empty();
    var table = $('<table class="table table-striped table-bordered">');//criando uma tabela.
    $.each(data, function (rowIndex, r) {//percorre os elementos de data, sendo rowIndex o indice atual do elemento e r o elementos em si(a linha)
        var row = $("<tr/>");//Criando uma linha
        $.each(r, function (colIndex, c) {//percorre os elementos da linha(r), sendo colIndex o indice atual do elemento e c o elemento em si(coluna)
            if(colIndex<3 || rowIndex==0) row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));//se for a linha 0 coloca o elemento com cabeçalho
            else row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
            
        });
        table.append(row);//adiciona a linha na tabela
    });
    return container.append(table);
}