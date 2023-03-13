import './App.css';
import FirstContainerInput from './components/firstcontainer/FirstContainerInput';
import SecondContainerList from './components/secondcontainer/SecondContainerList';
import React, {useState, useEffect} from 'react'

function App() {
  const [groceryList, setGroceryList] = useState([]);
  useEffect(() => {
    let localList = localStorage.getItem('groceryList') || [];
    if(!localList){
      localList = [];
      localStorage.setItem('groceryList',JSON.stringify(localList))
    } else {
      localList = JSON.parse(localList)
    }
    setGroceryList(localList)
  }, [])

  useEffect(() => {
    localStorage.setItem('groceryList',JSON.stringify(groceryList))
    console.log("APP: ",groceryList)
  }, [groceryList])
  
  const addItemToList = (item) => {
    setGroceryList([...groceryList, item])
  }
  
  return (
    <div className="App">
      <FirstContainerInput add={addItemToList}/>
      <SecondContainerList list={groceryList} setGroceryList={setGroceryList}/>
      {groceryList.length!==0 && <button className='btn btn-danger' onClick={() => setGroceryList([])}>Clear all</button>}
    </div>
  );
}

export default App;
