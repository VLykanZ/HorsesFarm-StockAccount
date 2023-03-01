import { useState, useEffect } from 'react'
import './FromComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

    console.log("Render Form Component");

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [fromValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputPrice = (event) => {
        setAmount(event.target.value)
    } 
    
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setFormValid(checkData)
    }, [title, amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className = "form-control" >
                    <label>ชื่อรายการ</label>
                    <input type = "text" placeholder = "ระบุชื่อรายการของคุณ" onChange={inputTitle} value ={title}/>
                </div>
                <div className="form-control">
                    <label> ราคา</label>
                    <input type = "number" placeholder = "ระบุราคา" onChange={inputPrice} value = {amount}/>
                </div>
                <div>
                    <button type = "Submit" className = "btn" disabled = {!fromValid}> Update!</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent