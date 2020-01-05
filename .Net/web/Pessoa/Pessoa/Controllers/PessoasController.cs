using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;


using Pessoa.Models;
using Newtonsoft.Json;

namespace Pessoa.Controllers
{

    [ApiController]
    [Route("[controller]")]
    
    public class PessoasController : ControllerBase
    {
        static List<Pessoas> listaPessoa = new List<Pessoas>();

        private readonly ILogger<PessoasController> _logger;
        

        public PessoasController(ILogger<PessoasController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void Criar([FromBody] JsonElement values)
        {
                                 
            //string json = JsonSerializer.ToString<Pessoas>(values)
            //string json = JsonSerializer.Deserialize<JsonElement>(values);
            //var x1 = JsonConvert.DeserializeObject<Pessoas>(values);
            //values.GetProperty("nome");
            System.Diagnostics.Debug.WriteLine(listaPessoa.Count());
            
            string nome = values.GetProperty("nome").ToString();
            int idade = (values.GetProperty("idade").GetInt32());
            listaPessoa.Add(new Pessoas(nome, idade));
            System.Diagnostics.Debug.WriteLine(listaPessoa);

        }

        [HttpDelete]

        public void deletar([FromBody] JsonElement values)
        {
            string nome = values.GetProperty("nome").ToString();
            int idade = (values.GetProperty("idade").GetInt32());
            
            int index = listaPessoa.FindIndex(x=> x.nome == nome && x.idade == idade);
            listaPessoa.RemoveAt(index);
    
            
        }

        [HttpGet]
        public IEnumerable<Pessoas> Get()
        {

            
            return listaPessoa;
        }
    }
}
