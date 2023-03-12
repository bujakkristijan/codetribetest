import React, {useState} from 'react'

const FirstContainerInput = (props) => {
    const add = props.add;
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();
        const item = {name, quantity, price};
        add(item);
    }

  return (
    <div>
        <form className='form-container'>
            <div className='item-container'>
                <label>Name: </label>
                <input type='text' onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='item-container'>
                <label>Quantity: </label>
                <input type='number'  onChange={(e) => setQuantity(e.target.value)}></input>
            </div>
            <div className='item-container'>
                <label>Price: </label>
                <input type='number'  onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <button type='submit' onClick={onSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default FirstContainerInput