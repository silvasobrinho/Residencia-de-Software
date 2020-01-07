using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace LIstadeCompras.Models
{
    [Serializable]
    public class Produtos
    {
        //private IEnumerable<Produtos> produtos;

        [JsonProperty("nome")]
        public string nome { get; set; }

        [JsonProperty("quantidade")]
        public int quantidade { get; set; }

 

        [JsonProperty("preco")]
        public string preco { get; set; }

        public Produtos(string nome, int quantidade, string preco) { this.nome = nome; this.quantidade = quantidade; this.preco = preco; }

        //public Produtos(IEnumerable<Produtos> produtos)
        //{
        //    this.produtos = produtos;
        //}

        public Produtos() { }
    }


}

