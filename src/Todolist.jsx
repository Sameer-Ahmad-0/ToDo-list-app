import React from 'react'
import { useState } from 'react'
import styles from './styles.module.css'
function Todolist() {

const [input, setInput] =useState("");
const [item, setItem]=useState([]);


const itemEvent=(event)=>{
setInput(event.target.value);
}

const listOfItem = ()=>{
  setItem((oldItem)=>{
   return [...oldItem, {id:Date.now(),value:input}]
  })
  setInput("");
 };
 const deleteItem=(id)=>{
  console.log("deleted");
  setItem(item.filter((todo=>item.id==id)))
 }


  return (
    
    <>
      <div className={styles.main_div}>
        <div className={styles.center_div}>
            <br/>
        <h1 className={styles}>ToDo List</h1>
        <br/>
        <input className={styles} type="text" value={input} placeholder='Add a Item' onChange={itemEvent} />
        <button className={styles} onClick= {listOfItem}><span>+</span></button>
        <ol>
           { item.map((itemVal, index)=>{
              return  <li key={itemVal.id}  className={styles}><span><i  className="fa fa-times" onClick={()=>deleteItem(itemVal.id)}></i></span>: {itemVal.value} </li>
            })}
        </ol>
        </div>
      </div>

    </>
  )
}

export default Todolist