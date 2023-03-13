import React, {useState} from 'react'
import './FirstContainerInput.css';

const FirstContainerInput = (props) => {
    
    const add = props.add;
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
        const item = {name, quantity, price};
        if(item.name === "" || item.quantity<1 || item.price<1){
            alert("Eror! Please insert valid values!");
        }
        else{
            add(item);
            alert("Item successfully added!")
        }    
    }

  return (
            <div className='main-container'>
                <h1 className='text-center'>Create item</h1>
                <form className='form-container'> 
                    <div className='item-container'>
                        <label className='item-label'>Name: </label>
                        <input className='form-control' type='text' onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='item-container'>
                        <label className='item-label'>Quantity: </label>
                        <input className='form-control' type='number'  onChange={(e) => setQuantity(e.target.value)}></input>
                    </div>
                    <div className='item-container'>
                        <label className='item-label'>Price: </label>
                        <input className='form-control' type='number'  onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <button className='btn btn-success' type='submit' onClick={onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
}

export default FirstContainerInput