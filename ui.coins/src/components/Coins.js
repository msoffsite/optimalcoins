import React from "react";

export const Coins = ({coins}) => {

    if (coins.length === 0) return null

    const CoinRow = (coin, index) => {

        return(
              <tr key={index}>
                  <td>{coin.denomination}</td>
                  <td>${coin.value.toFixed(2)}</td>
                  <td>{coin.occurrences}</td>
              </tr>
          );
    }

    const coinTable = coins.map((coin, index) => CoinRow(coin,index));

    return(
        <div className="container">
            <div className="row">
                <table className="table table-dark table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Denomination</th>
                        <th>Value</th>
                        <th>Occurrences</th>
                    </tr>
                    </thead>
                    <tbody>
                        {coinTable}
                    </tbody>
                </table>
            </div>
        </div>
    );
}