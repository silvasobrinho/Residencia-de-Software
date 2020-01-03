using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pessoa.Models;

namespace Pessoa.Controllers
{

    [ApiController]
    [Route("[controller]")]

    public class PessoasController : ControllerBase
    {


        List<Pessoas> listaPessoa = new List<Pessoas>()
        {
            new Pessoas ("Amanda", 19),
            new Pessoas ("Marcos", 20),
            new Pessoas ("Antonio", 21),
            new Pessoas ("Monique", 20),
            new Pessoas ("Carlos", 20),
            new Pessoas ("Manoel", 21),
            new Pessoas ("Jorge", 19),
            new Pessoas ("Henrique", 21),
            new Pessoas ("Carmem", 19),
            new Pessoas("Pamela", 19)
        };

        private readonly ILogger<PessoasController> _logger;

        public PessoasController(ILogger<PessoasController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Pessoas> Get()
        {
         
            
            return listaPessoa;
        }
    }
}
