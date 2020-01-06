const url = 'https://localhost:44384/pessoas';


function limpaform(){
    $("#produto").val(undefined),
    $("#valorproduto").val(undefined),
    $("#qtdproduto").val(undefined)
}



async function pegadados(){

   await axios.get(url )
      .then(response => {
          console.log(response.data)
         let dadosCarregados = response.data;
         dadosCarregados.forEach(element => {
            console.log("aaa      "+element);
        $("tbody").append(`
        <tr>
        <td>${element.nome}</td>
        <td>${element.quantidade}</td>
        <td>R$: ${element.preco}</td>
        <td><button onclick="deletar('${element.nome}', '${element.preco}','${element.quantidade}')">Deletar</button></td>
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
  console.log("aqui")
  axios({
    method: 'post',
    url : url ,
     data: {
    nome: $("#produto").val(),
    valor: $("#valorproduto").val(),
    quantidade: $("#qtdproduto").val(),
    }
  })
    .then(function (response) {
    console.log("resolveu")
    //limpaform();
    //recarrega();
    })
    .catch(function (error) {

      console.log(error);
    })

  /* event.preventDefault();
    axios.post(url , {
        nome: $("#produto").val(),
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
        .finally( ()=>{ }) */
}

async function deletar (nome , valor, quantidade){
	console.log(nome +"  " + valor + "   " + quantidade)
     axios.delete(url, {
	 params:
	 {
		 nome: nome,
		 valor: valor,
		 quantidade: quantidade
	 }
} )
    .then( res =>{
        console.log("resolveu")
    })
    .catch( (err)=>{
        console.log(err)
    })
    .finally(()=>{ 
        
        //recarrega()  }); 
		})
    }
       
      /*   axios({
            method: 'delete',
            url: url + '/deletar/'+ nome,
            
          });  
} */



   pegadados();
 

  

   