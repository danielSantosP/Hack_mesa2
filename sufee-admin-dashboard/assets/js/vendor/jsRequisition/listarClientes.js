jQuery(document).ready(function($) {
    

	var clientes = getClientes();//pega os usuarios da primeira pagina para preencher a tabela
    var populaClientes = populaC($("#selectClientes"), clientes);
});
function populaC(container, data) {
    container.empty();
    var select3= jQuery('<select id="cliente" name="idCliente" class="form-control" style="width:100%;">');//criando uma tabela.
    jQuery.each(data, function (rowIndex, r) {//percorre os elementos de data, sendo rowIndex o indice atual do elemento e r o elementos em si(a linha)
        console.log(r[0]);
        if(rowIndex!=0){
        select3.append(jQuery("<option value="+ r[8]+"/>").text(r[6]));
        }
    });
    return container.append(select3);
}

function getClientes() {
    var xmlHttp = new XMLHttpRequest();//elemento para fazer a requisição
    xmlHttp.open("GET", "http://localhost:2000/clientes/", false);//
    xmlHttp.send(null);
    

    var Data = JSON.parse(xmlHttp.responseText);
    console.log(Data[0]);
    var clientes = Array();
    clientes[0] = ["nomeCliente", "cpf ", "telefone", "telefone", "dataNascimento","celular","facebook","instagram","endereco"];//cABEÇALHO
    for (var i = 0; i < Data.length; i++) {//Pegando os elementos de cada user
        var auxiliar = Array();
        auxiliar[0] = Data[i]["nomeCliente"];
        auxiliar[1] = Data[i]["cpf"];
        auxiliar[2] = Data[i]["telefone"];
        auxiliar[3] = Data[i]["dataNascimento"];
        auxiliar[4] = Data[i]["celular"];
        auxiliar[5] = Data[i]["facebook"];
        auxiliar[6] = Data[i]["instagram"]; 
        auxiliar[7] = Data[i]["endereco"]; 
        auxiliar[8] = Data[i]["idCliente"]; 

        clientes[i+1] = auxiliar;
    }
    console.log(clientes)
    
    return clientes;
}