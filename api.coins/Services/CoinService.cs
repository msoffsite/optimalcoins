using System;
using System.Collections.Generic;
using System.Linq;
using api.coins.Models;

namespace api.coins.Services
{
    public class CoinService
    {
        public static List<Coin> OptimalCoinCombination(double inputValue)
        {
            var coins = Coin.InitializeList();

            if (inputValue <= 0)
            {
                return coins;
            }

            foreach (var coin in coins
                         .OrderByDescending(x => x.Value))
            {
                var coinValue = coin.Value;
                if (coinValue > inputValue) continue;
                var count = (int)Math.Floor(inputValue / coinValue);
                coin.Occurrences = count;
                inputValue -= (coinValue * count);
                inputValue = Math.Round(inputValue, 2);
                if (inputValue == 0)
                {
                    break;
                }
            }
            return coins;
        }
    }
}
