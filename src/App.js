import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import './App.css'
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponent";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const design = {color:'blue', textAlign:"center", fontsize:'1.5rem'}

  const initData = [
    {id:1, title:"ยีราฟ", amount: 75000},
    {id:2, title:"ม้าลาย", amount: -50000}
  ]

  const [items, setItems] = useState(initData)

  const [reportSell, setReportSell] = useState(0)
  const [reportBuy, setReportBuy] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() => {
      const amounts = items.map(items => items.amount)
      const sell = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
      const buy = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0) * -1)

      setReportSell(sell.toFixed(2))
      setReportBuy(buy.toFixed(2))
  }, [items, reportSell, reportBuy])

  return (
    <DataContext.Provider value = {
      {
        sell : reportSell,
        buy : reportBuy
      }
    }>
      <div className="container">
      <h1 style = {design}>ฟาร์มม้าศุภวิชญ์</h1>
      <Router>
      <div>
        <ul className="horizontal-menu">
          <li>
            <Link to = "/">Farm Info</Link>
          </li>
          <li>
            <Link to = "/insert">Log</Link>
          </li>
        </ul>
        <Routes>
            <Route path='/' element={<ReportComponent/>}></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
          </Routes>
      </div>
      </Router>
    </div>
    </DataContext.Provider>
  );
}

export default App;