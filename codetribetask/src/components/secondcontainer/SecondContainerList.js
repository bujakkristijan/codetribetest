import React, {useState, useEffect} from 'react'
import SecondContainerItem from './SecondContainerItem'

const SecondContainerList = (props) => {
    const groceryList = props.list;
    const setGroceryList = props.setGroceryList;

    const [isEditClicked, setIsEditClicked] = useState(false);

    // const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState(1);
    // const [price, setPrice] = useState(1);
   
    // const [first, setfirst] = useState(second)
    //DOBIJE DOBAR groceryList nakon brisanja ali ga ne renderuje dobro, ne znam zasto!!!!
    // console.log("PROPS List" + JSON.stringify(groceryList))

    // const handleEdit = (item, itemIndex) =>{
    //     console.log("ITEM changed" + JSON.stringify(item));
        
    //     const updatedItem = {
    //         ...item,
    //         name: item.name, // newName is the value from the name input field
    //         quantity: item.quantity, // newQuantity is the value from the quantity input field
    //         price: item.price, // newPrice is the value from the price input field
    //         isEditClicked: true
    //     };
    //     const updatedList = groceryList.map((itemFromList,index) =>{
    //         if(itemIndex === index){
    //             return updatedItem;
    //         }else{
    //             return itemFromList;
    //         }
    //     });
    //     setGroceryList(updatedList);
    // }

    useEffect(() => {
      console.log("render");
    
      
    }, [groceryList])
    

    const handleEdit = (item, itemIndex) =>{
        console.log(item);
        setGroceryList(groceryList.map((i, index) => itemIndex === index ? item : i));

    }
    
   
    // const handleEdit = (item, itemIndex) =>{
    //     // console.log("name" + JSON.stringify({...name}));
    //     // item.setName(name);
    //     // item.setPrice(price);
    //     // item.setQuantity(quantity);
    //     console.log("Usao")
    //     console.log("item handle edit" + JSON.stringify(item));
    //     // setGroceryList(groceryList.map((i, index) => itemIndex === index ? item : i));
    //     const updatedList = groceryList.map((itemFromList,index) =>{
    //         console.log("item index: " + itemIndex + " index:" + index)
    //         if(itemIndex === index){
    //             return {
    //                 ...itemFromList,
    //                 name: item.name,
    //                 quantity: item.quantity,
    //                 price: item.price,
    //                 isEditClicked: true

    //             };
    //         }else{
    //             return itemFromList;
    //         }
    //     });
    //     console.log("UPDATED LIST " + JSON.stringify(updatedList))
    //     // return updatedList
    //     setGroceryList(updatedList);
    // }

    const handleDelete = (item) =>{
        console.log("Item from delete" + item);
        setGroceryList(groceryList.filter((deleteItem) => deleteItem.name !== item.name ));

    }

    

    

    const inputOrLabel = (item) =>{
        if(isEditClicked){
            return <><td className='td-content'>
                <input type='text' readOnly={!isEditClicked}
                    defaultValue={item.name} onChange={(e) => item.setName(e.target.value)}>
                </input>
            </td><td className='td-content'>
                    <input type='number' readOnly={!isEditClicked}
                        defaultValue={item.quantity} onChange={(e) => item.setQuantity(e.target.value)}>
                    </input>
                </td><td className='td-content'>
                    <input type='number' readOnly={!isEditClicked}
                        defaultValue={item.price} onChange={(e) => item.setPrice(e.target.value)}>
                    </input>
                </td></>
        }else{
            
            return <><td className='td-content'>{item.name}</td><td className='td-content'>{item.quantity}</td><td className='td-content'>{item.price}</td></>          
        }                          
    }
    
  return (
    <div>
        <div className='list-items-container'>
        {groceryList.length ===0 && <h1 className='text-center'>List is empty</h1>}
        {groceryList.length !==0 && <h1 className='text-center'>List items</h1>}
        {groceryList.length !==0 && <table id="table" className='table table-hover'> 
                <thead className='thead-name'>
                    <tr>
                        <th className='theadth'>Name</th>
                        <th className='theadth'>Quantity</th>
                        <th className='theadth'>Price</th>
                        <th className='theadth'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {groceryList.map(
                        (item, index) => 
                        // <tr>


                        //     {inputOrLabel(item)}

                        //     <td className='td-content'>
                        //         <button className='btn btn-success' onClick={() => {
                        //             if(isEditClicked) handleEdit(item, index)
                        //             setIsEditClicked(!isEditClicked)
                        //             }}>{isEditClicked? 'Save' : "Edit"}</button>
                        //         {!isEditClicked && <button className='btn btn-danger' onClick={() => handleDelete(item,index)}
                        //             style={{ marginLeft: "5px" }}>Delete</button>}
                        //     </td>
                        // </tr>
                         <><tr>
                                  {/* <td className='td-content'>{item.name}</td>
                                  <td className='td-content'>{item.quantity}</td>
                                  <td className='td-content'>{item.price}</td> */}
                              </tr><SecondContainerItem key={index} item={item} groceryList={groceryList} index={index} handleEdit={handleEdit} handleDelete={handleDelete} /></>
                    )}
                </tbody>
            </table>
                }   
        </div>
    </div>
  )
}

export default SecondContainerList