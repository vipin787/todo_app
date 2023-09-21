import { useState } from 'react';
import './App.css';
import uuid from "react-uuid";
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange (e) {
    console.log(e.target.value);
    setItem(e.target.value);
  }

  function addItem () {
    const itemObj = {id: uuid(), itemName: item}
    setItemList((prevItem)=> [...prevItem, itemObj]);
    // console.log([...prevItem], item);
    toast.success("Item added successfully")
  }

  function deleteItem (id) {
    console.log(id);
    const filterItem = itemList.filter((value) => {
      return value.id !== id 
    });
    setItemList(filterItem);
    toast.error("Item deleted successfully")
  }

  function deleteAll () {
    setItemList([]);
    toast.error("All item deleted successfully")
  }

  return (
    <div className="App">
      <div className="parent-div" >
        <h1 style={{border: "1px solid gray", borderRadius: "5px"}}>React To-Do List App</h1>
        <div className="upper-half">
          <div className="input-div">
            <input type="search" value={item} onChange={handleChange} placeholder="Todo..." />
          </div>
          <div className="btn-div">
            <button className="add-btn" onClick={addItem} disabled={item<=0 ? true: false}>Add Item</button>
            <button className="delete-btn" onClick={deleteAll}>Delete All </button>
          </div>
        </div>
        <div className="lower-half">
          <TodoList itemList={itemList} deleteItem={deleteItem} />
          <ToastContainer theme="dark" />
          {/* theme="colored" and normal also */}
        </div>
      </div>
    </div>
  );
}

export default App;
