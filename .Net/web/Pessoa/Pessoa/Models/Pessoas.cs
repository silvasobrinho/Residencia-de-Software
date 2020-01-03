using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pessoa.Models
{
    public class Pessoas
    {
        public string nome { get; set; }
        public int idade { get; set; }

        public Pessoas(string nome, int idade) { this.nome = nome; this.idade = idade; }
    }
}
