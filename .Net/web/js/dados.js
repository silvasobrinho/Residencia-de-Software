const url = 'http://55ba2504.ngrok.io';


function limpaform(){
    $("#produto").val(undefined),
    $("#valorproduto").val(undefined),
    $("#qtdproduto").val(undefined)
}



async function pegadados(){

   await axios.get(url + '/listar')
      .then(response => {
          console.log(response.data)
         let dadosCarregados = response.data;
         dadosCarregados.forEach(element => {
            console.log("aaa      "+element);
        $("tbody").append(`
        <tr>
        <td>${element.produto}</td>
        <td>${element.quantidade}</td>
        <td>${element.valor}</td>
        <td><button onclick="deletar('${element.produto}')">Deletar</button></td>
        <tr>
        `)
     

    });
    
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => { });
 
  }

function recarrega(){
   window.location.href="index.html";
}
async function gravadados(){
    event.preventDefault();
    axios.post(url + '/cadastrar', {
        produto: $("#produto").val(),
        valor: $("#valorproduto").val(),
        quantidade: $("#qtdproduto").val(),
        })
        .then(function (response) {
        
        limpaform();
        recarrega();
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally( ()=>{ })
}

async function deletar (nome){
     axios.delete(url + '/deletar/'+ nome )
    .then( res =>{
        console.log(resolveu)
    })
    .catch( (err)=>{
        console.log(err)
    })
    .finally(()=>{ 
        console.log(url + '/deletar/'+ nome)
        recarrega()  }); 
    }
       
      /*   axios({
            method: 'delete',
            url: url + '/deletar/'+ nome,
            
          });  
} */



   pegadados();
 

  

   