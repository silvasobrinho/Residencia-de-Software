using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Pessoa.Models;

namespace Pessoa.Models
{
    [Serializable]
    public class Produtos
    {
        //private IEnumerable<Produtos> produtos;

        [JsonProperty("nome")]
        public string nome { get; set; }

        [JsonProperty("quantidade")]
        public int quantidade { get; set; }

        //[JsonIgnore]
        [JsonConverter(typeof(DoubleJsonConverter))]
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

public class DoubleJsonConverter : JsonConverter
{
    public override bool CanConvert(Type objectType)
    {
        return objectType.IsSubclassOf(typeof(double));
    }

    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        return double.Parse((string)reader.Value);
    }

    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        writer.WriteValue($"{value}");
    }
}