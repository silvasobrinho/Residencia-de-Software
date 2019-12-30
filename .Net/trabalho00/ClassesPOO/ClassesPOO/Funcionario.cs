using System;
using System.Collections.Generic;
using System.Text;

namespace ClassesPOO
{
    class Funcionario : Pessoa
    {
        private string funcao;
        public string comprimento;

        public void setFuncao( string funcao)
        {
            this.funcao = funcao;
        }

        public string getFuncao()
        {
            return this.funcao;
        }
    }
}
