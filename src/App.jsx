
import  { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import DataFetcher from './Currency'
// 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=f7b31e03e5f74aec8f96dc502b8b27a7'


function App() {

  const [currs, setCurrs] = useState([])
  
  useEffect(() => {
    const url = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=f7b31e03e5f74aec8f96dc502b8b27a7";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCurrs(Object.entries(json.rates));
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);


return(
  <>

<table className="table table-striped ">
  <thead>
    <tr>
      <th scope="col">Currency</th>
      <th scope="col">We Buy</th>
      <th scope="col">Exchange Rate</th>
      <th scope="col">We Sell</th>
    </tr>
  </thead>
  <tbody>
  
  {
          currs.filter(([currency]) => ["CAD", "EUR", "IDR", "JPY", "CHF", "GPB" ].includes(currency)).map(([currency, rates], index)=> (
          <tr key={index}>
            <td>{currency}</td>
            <td>{parseFloat(rates) + (parseFloat(rates)*0.05) }</td>
            <td>{parseFloat(rates)}</td>
            <td>{parseFloat(rates) - (parseFloat(rates)*0.05) }</td>
          </tr>
        ))}
  </tbody>
</table>
  {/* <ul>
  
        {
          currs.filter(([currency]) => ["CAD", "EUR", "IDR", "JPY", "CHF", "GPB" ].includes(currency)).map(([currency, rates], index)=> (
          <li key={index}>
            {currency} : {rates - rates*0.05}
          </li>
        ))}
  </ul> */}
  </>
);



  
}

export default App
