using api.coins.Services;
using Xunit;

namespace test.coins
{
    public class Tests
    {
        [Fact]
        public static void TestOptimalCoinCombination()
        {
            var coins = CoinService.OptimalCoinCombination(101.07);
            Assert.Contains(coins, x => x.Occurrences > 0);
        }
    }
}
