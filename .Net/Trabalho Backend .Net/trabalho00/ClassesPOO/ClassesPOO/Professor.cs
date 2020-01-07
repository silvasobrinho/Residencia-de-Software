using System;
using System.Collections.Generic;
using System.Text;

namespace ClassesPOO
{
    class Professor : Pessoa
    {
        private int matricula;
        private string materia;

        public void setMatricula(int matricula)
        {
            this.matricula = matricula;
        }

        public int getMatricula()
        {
            return this.matricula;
        }

        public string getMateria()
        {
            return this.materia;
        }

        public void setMateria(string materia)
        {
            this.materia = materia;
        }
    }
}
