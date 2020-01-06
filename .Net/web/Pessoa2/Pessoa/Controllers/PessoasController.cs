using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Data;



using Newtonsoft.Json;
using Pessoa.Models;
using System.Collections;

namespace Pessoa.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class PessoasController : ControllerBase
    {
        static List<Produtos> listaPessoa = new List<Produtos>();

        private readonly ILogger<PessoasController> _logger;


        public PessoasController(ILogger<PessoasController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void Criar([FromBody] Produtos produto)
        {

            //Produtos deserializedlistobj = (Produtos)JsonConvert.DeserializeObject(produtos, typeof(Produtos));
            //string json = System.Text.Json.JsonSerializer.Serialize(produto);
            System.Diagnostics.Debug.WriteLine(produto);
            listaPessoa.Add(produto);          
            //string json = JsonSerializer.ToString<Pessoas>(values)
            //string json = JsonSerializer.Deserialize<JsonElement>(values);
            //var x1 = JsonConvert.DeserializeObject<Pessoas>(values);
            //values.GetProperty("nome");
           // System.Diagnostics.Debug.WriteLine(listaPessoa.Count());
            
            //string nome = values.GetProperty("nome").ToString();
            //string a = (values.GetProperty("quantidade").ToString());
            //int quantidade = Convert.ToInt32(a);
            //string v = (values.GetProperty("valor").ToString());
            //double preco = Convert.ToDouble(v);
            //listaPessoa.Add(new Produtos(nome, quantidade, preco));
            //System.Diagnostics.Debug.WriteLine(values);

        }

        [HttpDelete]

        public void deletar([FromBody] Produtos produto)
        {
            int index = listaPessoa.FindIndex(x=> x.nome == produto.nome && x.quantidade == produto.quantidade && x.preco == produto.preco);
            System.Diagnostics.Debug.WriteLine(index);
            listaPessoa.RemoveAt(index);
            //System.Diagnostics.Debug.WriteLine(values);
            // System.Diagnostics.Debug.WriteLine(values); 
            // string nome = values.GetProperty("nome").ToString();
            // string a = (values.GetProperty("quantidade").ToString());
            // int quantidade = Convert.ToInt32(a);
            // string preco = (values.GetProperty("valor").ToString());
            // //double preco = Convert.ToDouble(v);
            //System.Diagnostics.Debug.WriteLine(a);
            //System.Diagnostics.Debug.WriteLine(nome);
            //System.Diagnostics.Debug.WriteLine(values);

            //int index = listaPessoa.FindIndex(x=> x.nome == nome && x.quantidade == quantidade && x.preco == preco);
            // if (index > -1)
            // {
            //     listaPessoa.RemoveAt(index);
            // }       


        }

        [HttpGet]
        public IEnumerable<Produtos> Get()
        {

            
            return listaPessoa;
        }
    }
}
