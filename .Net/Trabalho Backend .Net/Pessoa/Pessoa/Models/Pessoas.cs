using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Pessoa.Models;

namespace Pessoa.Models
{
    public class Pessoas
    {
        [JsonProperty("nome")]
        public string nome { get; set; }
        [JsonProperty("idade")]
        public int idade { get; set; }

        public Pessoas(string nome, int idade) { this.nome = nome; this.idade = idade; }

        
          

        
    }

   
}
