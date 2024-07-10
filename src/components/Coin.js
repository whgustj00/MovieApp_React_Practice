import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeMoney = (event) => setMoney(event.target.value);
  const onChangeCoin = (event) => {
    setSelectedCoin(coins.find((c) => c.id === event.target.value));
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            onChange={onChangeMoney}
            value={money}
            type="number"
            placeholder="달러 입력"
          />
          <hr />
          <select onChange={onChangeCoin}>
            <option value="">코인 선택</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)}{" "}
                USD
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedCoin && (
        <p>
          {selectedCoin.name} ({selectedCoin.symbol}): {money} USD ={" "}
          {(money / selectedCoin.quotes.USD.price).toFixed(2)}{" "}
          {selectedCoin.symbol}
        </p>
      )}
    </div>
  );
}

export default Coin;
