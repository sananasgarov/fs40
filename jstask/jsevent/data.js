const data = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    value: "9685",
    change: "2.83%",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    value: "210.5",
    change: "6.17%",
  },
  {
    name: "Ripple",
    ticker: "XRP",
    value: "0.2812",
    change: "2.47%",
  },
  {
    name: "Bitcoin Cash",
    ticker: "BCH",
    value: "441.4",
    change: "5.01%",
  },
  {
    name: "Bitcoin SV",
    ticker: "BSV",
    value: "303.17",
    change: "5.53%",
  },
  {
    name: "Litecoin",
    ticker: "LTC",
    value: "74.935",
    change: "4.25%",
  },
  {
    name: "Tether",
    ticker: "USDT",
    value: "0.9994",
    change: "-1.7%",
  },
  {
    name: "EOS",
    ticker: "EOS",
    value: "4.6161",
    change: "3.15%",
  },
  {
    name: "Binance Coin",
    ticker: "BNB",
    value: "19.824",
    change: "-3.82%",
  },
  {
    name: "Cardano",
    ticker: "ADA",
    value: "0.060389",
    change: "2.93%",
  },
  {
    name: "Tezos",
    ticker: "XTZ",
    value: "2.1247",
    change: "6.12%",
  },
  {
    name: "Ethereum Classic",
    ticker: "ETC",
    value: "12.5988",
    change: "4.09%",
  },
  {
    name: "Stellar",
    ticker: "XLM",
    value: "0.07034",
    change: "-4.10%",
  },
  {
    name: "Monero",
    ticker: "XMR",
    value: "79.523",
    change: "3.45%",
  },
  {
    name: "TRON",
    ticker: "TRX",
    value: "0.020881",
    change: "5.21%",
  },
];
const t = document.querySelector("#table");
function render(dataarr) {
  t.innerHTML = "";
  t.innerHTML += `
  <tr>
                            <th><button
                                    onclick="Name_filter()">Name</button></th>
                            <th><button  onclick="Ticker_filter()">ticker</button></th>
                            <th><button onclick="Value_filter()">value</button></th>
                            <th><button onclick="Change_filter()">change</button></th>
                        </tr>
  `;
  dataarr.forEach((item) => {
    if (parseFloat(item.change) < 0) {
      t.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.ticker}</td>
        <td>${item.value}</td>
        <td style="color: red;":>${item.change}</td>
      </tr>
    `;
    } else {
      t.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.ticker}</td>
        <td >${item.value}</td>
        <td style="color: green;":>${item.change}</td>
      </tr>
    `;
    }
  });
}
render(data);
function Name_filter() {
  data.sort((a, b) => a.name.localeCompare(b.name));
  render(data);
}
function Ticker_filter() {
  data.sort((a, b) => a.ticker.localeCompare(b.ticker));
  render(data);
}
function Value_filter() {
  data.sort((a, b) => a.value - b.value);
  render(data);
}
function Change_filter() {
  data.sort((a, b) => parseFloat(a.change) - parseFloat(b.change));
  render(data);
}
const input = document.querySelector("#input");
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(value) ||
      item.ticker.toLowerCase().includes(value)
  );
  render(filtered);
});
