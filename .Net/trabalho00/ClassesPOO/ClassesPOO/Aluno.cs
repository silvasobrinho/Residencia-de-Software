using System;
using System.Collections.Generic;
using System.Text;

namespace ClassesPOO
{
    class Aluno : Pessoa
    {
        private int matricula;

        public void setMatricula(int matricula)
        {
            this.matricula = matricula;
        }

        public int getMatricula()
        {
            return this.matricula;
        }
    }
}
