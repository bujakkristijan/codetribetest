import React, {useState, useEffect} from 'react'
import SecondContainerItem from './SecondContainerItem'

const SecondContainerList = (props) => {
    const groceryList = props.list;
    const setGroceryList = props.setGroceryList;

    const [isEditClicked, setIsEditClicked] = useState(false);
   
    // const [first, setfirst] = useState(second)
    //DOBIJE DOBAR groceryList nakon brisanja ali ga ne renderuje dobro, ne znam zasto!!!!
    console.log("PROPS List" + JSON.stringify(groceryList))

  
    
   
    const handleEdit = (item, itemIndex) =>{
        console.log(item);
        setGroceryList(groceryList.map((i, index) => itemIndex === index ? item : i));

    }

    const handleDelete = (item) =>{
        console.log("Item from delete" + item);
        setGroceryList(groceryList.filter((deleteItem) => deleteItem.name !== item.name ));

    }
    

  return (
    <div>
        <div className='list-items-container'>
        <table id="table" className='table table-hover'>
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
                        <tr>
                            <td className='td-content'>{item.name}</td>
                            <td className='td-content'>{item.quantity}</td>
                            <td className='td-content'>{item.price}</td>
                            <td className='td-content'>
                                <button className='btn btn-success' onClick={() => {
                                    if(isEditClicked) handleEdit({item},index)
                                    setIsEditClicked(!isEditClicked)
                                    }}>{isEditClicked? 'Save' : "Edit"}</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(item,index)}
                                    style={{ marginLeft: "5px" }}>Delete</button>
                            </td>
                        </tr>
                        // <><tr>
                            
                        //          <td className='td-content'>{item.name}</td>
                        //          <td className='td-content'>{item.quantity}</td>
                        //          <td className='td-content'>{item.price}</td>
                        //      </tr><SecondContainerItem key={index} item={item} groceryList={groceryList} index={index} handleEdit={handleEdit} handleDelete={handleDelete} /></>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SecondContainerList