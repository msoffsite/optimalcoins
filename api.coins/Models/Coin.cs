using System.Collections.Generic;

namespace api.coins.Models
{
    public class Coin
    {
        public string Denomination { get; set; }
        public double Value { get; set; }
        public int Occurrences { get; set; } = 0;

        private Coin(string denomination, double value)
        {
            Denomination = denomination;
            Value = value;
        }

        internal static List<Coin> InitializeList()
        {
            var output = new List<Coin>
            {
                new Coin("Dollar", 1.00),
                new Coin("Half Dollar", .50),
                new Coin("Quarter", .25),
                new Coin("Dime", .10),
                new Coin("Nickel", .05),
                new Coin("Penny", .01)
            };
            return output;
        }
    }
}
