using System.Collections.Generic;
using api.coins.Models;
using api.coins.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.coins.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("[controller]")]
    public class CoinsController : ControllerBase
    {
        private readonly ILogger<CoinsController> _logger;

        public CoinsController(ILogger<CoinsController> logger)
        {
            _logger = logger;
        }

        [HttpGet, HttpPost]
        [Route("getOptimalCoinCombination/{inputValue:double?}")]
        public Coin[] Get(double inputValue = 0)
        {
            var output = CoinService.OptimalCoinCombination(inputValue);
            return output.ToArray();
        }
    }
}
