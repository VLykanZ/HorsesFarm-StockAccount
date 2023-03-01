import DataContext from "../data/DataContext";
import { useContext } from "react";
import './ReportComponent.css'

const ReportComponent = () => {
  const {sell, buy} = useContext(DataContext)
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

    return (
        <div>
          <h4> กำไร (บาท) </h4>
          <h1>฿{formatNumber((sell - buy).toFixed(2))} </h1>
          <div className="report-container">
            <div>
              <h4>ขายสัตว์</h4>
              <p className="report plus"> ฿{formatNumber(sell)}</p>
            </div>

            <div>
              <h4>ซื้อสัตว์</h4>
              <p className="report minus"> ฿{formatNumber(buy)}</p>
            </div>

          </div>
        </div>
      );
}

export default ReportComponent