import React, {useState, useEffect} from 'react'
import SecondContainerItem from './SecondContainerItem'

const SecondContainerList = (props) => {
    
    const groceryList = props.list;
    const setGroceryList = props.setGroceryList;

    const handleEdit = (item, itemIndex) =>{
        setGroceryList(groceryList.map((i, index) => itemIndex === index ? item : i));
    }
    const handleDelete = (item) =>{
        setGroceryList(groceryList.filter((deleteItem) => deleteItem.name !== item.name ));
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
                        <SecondContainerItem key={index} item={item} index={index} handleEdit={handleEdit} handleDelete={handleDelete}/>
                        )
                    }
                </tbody>
            </table>
        }   
        </div>
    </div>
  )
}

export default SecondContainerList