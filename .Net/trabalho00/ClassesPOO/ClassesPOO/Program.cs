using System;

namespace ClassesPOO
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno alunoSupimpa = new Aluno();

            alunoSupimpa.setMatricula(0123456789);
            alunoSupimpa.setIdade(16);
            alunoSupimpa.setNome("Clodoaldo supimposo");
            
            
            Professor professorPardal = new Professor();
            professorPardal.setNome("Girafales");
            professorPardal.setIdade(48);
            professorPardal.setMatricula(9843210);
            professorPardal.setMateria("Fisica Quantica");


            Funcionario funcionarioLegal = new Funcionario();
            funcionarioLegal.setNome("Dona moça tia");
            funcionarioLegal.setIdade(32);
            funcionarioLegal.setFuncao("Limpeza");
 

            Console.WriteLine("Olá sou o {0} minha matricula é {1} e tenho {2} anos. \n\n", alunoSupimpa.getNome(), alunoSupimpa.getMatricula(), alunoSupimpa.getIdade());


            Console.WriteLine("Olá sou o {0} mestro aulas de {1} minha matricula é {2} e tenho {3} anos. \n\n", professorPardal.getNome(), professorPardal.getMateria(), professorPardal.getMatricula(), professorPardal.getIdade());

            Console.WriteLine("Olá sou a {0} trabalho aqui na parte de {1} e tenhos {2} anos.\n", funcionarioLegal.getNome(), funcionarioLegal.getFuncao(), funcionarioLegal.getIdade());

        }
    }
}
