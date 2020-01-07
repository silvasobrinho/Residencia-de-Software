using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LIstadeCompras.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace LIstadeCompras.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ProdutosController : ControllerBase
    {
        static List<Produtos> listaPessoa = new List<Produtos>();

        private readonly ILogger<ProdutosController> _logger;


        public ProdutosController(ILogger<ProdutosController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void Criar([FromQuery] Produtos produto)
        {

            System.Diagnostics.Debug.WriteLine(produto.nome + "    " + produto.preco + "    " + produto.quantidade);
            listaPessoa.Add(produto);

        }

        [HttpDelete]

        public void deletar([FromQuery] Produtos produto)
        {
            System.Diagnostics.Debug.WriteLine(produto.nome + "    " + produto.preco + "    " + produto.quantidade);
            System.Diagnostics.Debug.WriteLine(produto);
            int index = listaPessoa.FindIndex(x => x.nome == produto.nome && x.quantidade == produto.quantidade && x.preco == produto.preco);
            System.Diagnostics.Debug.WriteLine(index);
            listaPessoa.RemoveAt(index);
        }

        [HttpGet]
        public IEnumerable<Produtos> Get()
        {


            return listaPessoa;
        }
    }
}
