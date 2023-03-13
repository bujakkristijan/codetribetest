import React, {useState} from 'react'

const SecondContainerItem = (props) => {

    const item = props.item
    const index = props.index
    const handleDelete = props.handleDelete
    const handleEdit = props.handleEdit
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [name, setName] = useState(item.name || '');
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const [price, setPrice] = useState(item.price || 1);

     const inputOrLabel = (item)=>{
        if(isEditClicked === true){
            return <>
                <td className='td-content'>
                    <input type='text'
                        defaultValue={item.name} onChange={(e) => setName(e.target.value)}>
                    </input>
                </td>
                <td className='td-content'>
                    <input type='number'
                        defaultValue={item.quantity} onChange={(e) => setQuantity(e.target.value)}>
                    </input>
                </td>
                <td className='td-content'>
                    <input type='number'
                        defaultValue={item.price} onChange={(e) => setPrice(e.target.value)}>
                    </input>
                </td>
        </>
        }
        else{
            return <><td className='td-content'>{item.name}</td><td className='td-content'>{item.quantity}</td><td className='td-content'>{item.price}</td></>
        }
     }

  return (
        <tr>
            {inputOrLabel(item)}
            <td className='td-content'>
                <button className='btn btn-success' onClick={() => {
                    if(isEditClicked) handleEdit({name, quantity, price},index)
                    setIsEditClicked(!isEditClicked)
                    }}>{isEditClicked? 'Save' : "Edit"}</button>
                <button className='btn btn-danger' onClick={() => handleDelete(item,index)}
                    style={{ marginLeft: "5px" }}>Delete</button>
            </td>
        </tr>
        )
}

export default SecondContainerItem