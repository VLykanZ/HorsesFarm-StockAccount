import Item from "./Item";
import './transaction.css'

const Transaction =(props) =>{

  const {items} = props
  
    return (
      <div>
        <ul className="item-list">
        {items.map((i)=>{
            return <Item {...i} key = {i.id}/>
        })}
      </ul>
      </div>
    );
  }

  export default Transaction;