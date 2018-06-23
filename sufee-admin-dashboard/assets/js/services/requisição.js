$.ajax({
    url: 'http://localhost:2000/clientes/', 
    type: 'POST', 
    contentType: 'application/json', 
    data: JSON.stringify({nome:"Luis"})}
)