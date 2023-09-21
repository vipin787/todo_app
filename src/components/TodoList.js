import React from "react";
import "./TodoList.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function TodoList({ itemList, deleteItem, editItem }) {
  return (
    <>
      {itemList.length !== 0 ?
      itemList.map((val) => {
        return (
          <div className="item" key={val.id}>
            <div className="item-child">
              <span>{val.itemName}</span>
              <div className="btns">
                <div>
                  <AiOutlineEdit style={{ cursor: "pointer" }} onClick={()=>editItem(val.id)} />
                </div>
                <div>
                  <AiOutlineDelete style={{ cursor: "pointer" }} onClick={()=> deleteItem(val.id)} />
                </div>
              </div>
            </div>
          </div>
        );
      }) : "No item to display"}
    </>
  );
}

export default TodoList;
