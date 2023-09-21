import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [itemId, setItemId] = useState();

  function handleChange(e) {
    console.log(e.target.value);
    setItem(e.target.value);
  }

  function addItem() {
    if (toggleBtn) {
      const newList = itemList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, itemName: item };
        }
        return todo;
      });
      setItemList(newList);
      setToggleBtn(false);
      setItem("");
      setItemId();
      toast.info("Item Updated Successfully")
    } else {
      const itemObj = { id: uuid(), itemName: item };
      setItemList((prevItem) => [...prevItem, itemObj]);
      // console.log([...prevItem], item);
      toast.success("Item added successfully");
    }
  }

  function deleteItem(id) {
    console.log(id);
    const filterItem = itemList.filter((value) => {
      return value.id !== id;
    });
    setItemList(filterItem);
    toast.error("Item deleted successfully");
  }

  function deleteAll() {
    setItemList([]);
    toast.error("All item deleted successfully");
  }

  function editItem(id) {
    // console.log(id)
    const editTodo = itemList.find((todo) => {
      return todo.id === id;
    });
    console.log("id =>", id);
    setItem(editTodo.itemName);
    setToggleBtn(true);
    setItemId(id);
  }

  return (
    <div className="App">
      <div className="parent-div">
        <h1 style={{ border: "1px solid gray", borderRadius: "5px" }}>
          React To-Do List App
        </h1>
        <div className="upper-half">
          <div className="input-div">
            <input
              type="search"
              value={item}
              onChange={handleChange}
              placeholder="Todo..."
            />
          </div>
          <div className="btn-div">
            <button
              className="add-btn"
              onClick={addItem}
              disabled={item <= 0 ? true : false}
            >
              {" "}
              {toggleBtn ? "Update Item" : "Add Item"}
            </button>
            <button className="delete-btn" onClick={deleteAll}>
              Delete All{" "}
            </button>
          </div>
        </div>
        <div className="lower-half">
          <TodoList
            itemList={itemList}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <ToastContainer theme="dark" />
          {/* theme="colored" and normal also */}
        </div>
      </div>
    </div>
  );
}

export default App;
