export async function getCoins(data) {

    const host = window.location.hostname;
    let apiUrl = "https://localhost:44357/";
    
    if (host.indexOf("local") !== 0) {
      apiUrl = "http://coins-api.offsitedeveloper.com/";
    }

    const response = await fetch(apiUrl + "coins/getOptimalCoinCombination/" + data);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
}