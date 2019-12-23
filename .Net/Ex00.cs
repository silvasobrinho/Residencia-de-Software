using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Digite a quantidade notas que vão ser inserias: ");
            int qtdNotas = Convert.ToInt32(Console.ReadLine());

            double[] notas = new double [qtdNotas];
            double maior = -9999999999, menor = 9999999999, media = 0;


            for(int i = 0; i< qtdNotas;i++)
            {
                Console.WriteLine("Digite um numero: ");
                notas[i] = Convert.ToInt32(Console.ReadLine());
                if(maior < notas[i]) { maior = notas[i]; }
                if( menor > notas[i] ) { menor = notas[i]; }
                media += notas[i];
            }

            for(int i = 1 ; i <= notas.Length;i++)
            {
                Console.WriteLine("Seu " + i + "º numero digitado foi: " + notas[i - 1]+"\n");
            }

            media = media / qtdNotas;
            Console.WriteLine("O maior numero é: " + maior + "\nO menor é: " + menor + "\nA media é: " + media );
        }
    }
}
