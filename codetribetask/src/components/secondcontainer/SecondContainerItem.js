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
     console.log("ITEEEEM" + JSON.stringify(item));


     const inputOrLabel = (item)=>{
        if(isEditClicked === true){
            return <><td className='td-content'>
            <input type='text' readOnly={!isEditClicked}
                defaultValue={item.name} onChange={(e) => setName(e.target.value)}>
            </input>
        </td>
        <td className='td-content'>
            <input type='number' readOnly={!isEditClicked}
                defaultValue={item.quantity} onChange={(e) => setQuantity(e.target.value)}>
            </input>
        </td>
        <td className='td-content'>
            <input type='number' readOnly={!isEditClicked}
                defaultValue={item.price} onChange={(e) => setPrice(e.target.value)}>
            </input>
        </td>
        </>
        }
        else{
             return <><td className='td-content'>{item.name}</td><td className='td-content'>{item.quantity}</td><td className='td-content'>{item.price}</td></>
        }
     }


    const groceryList = props.groceryList;
    console.log("GROCERYYYYY LIIIISTTT " + JSON.stringify(groceryList));
  return (
        <tr>
            {/* <td className='td-content'>
                                <input type='text' readOnly={!isEditClicked}
                                    defaultValue={item.name} onChange={(e) => setName(e.target.value)}>
                                </input>
                            </td>
                            <td className='td-content'>
                                <input type='number' readOnly={!isEditClicked}
                                    defaultValue={item.quantity} onChange={(e) => setQuantity(e.target.value)}>
                                </input>
                            </td>
                            <td className='td-content'>
                                <input type='number' readOnly={!isEditClicked}
                                    defaultValue={item.price} onChange={(e) => setPrice(e.target.value)}>
                                </input>
                            </td> */}
                            {inputOrLabel(item)}
                            <td className='td-content'>
                                <button className='btn btn-success' onClick={() => {
                                    if(isEditClicked) handleEdit({name, quantity, price},index)
                                    setIsEditClicked(!isEditClicked)
                                    }}>{isEditClicked? 'Save' : "Edit"}</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(item,index)}
                                    style={{ marginLeft: "5px" }}>Delete</button>
                            </td>
                            {/* {isEditClicked && <td><button className='btn btn-danger' onClick={() => {
                                if(isEditClicked) handleEdit({name, quantity, price},index)
                                setIsEditClicked(true)
                            }} style={{ marginLeft: "5px" }}>Save</button></td>} */}
                        </tr>
  )
}

export default SecondContainerItem