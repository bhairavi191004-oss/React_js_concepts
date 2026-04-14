import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TodoList() {
    const [groccery,setgroccery] = useState("")
    const [groccerylist,setgroccerylist] = useState([])
    useEffect(() => {
      handleget()
    },[])
    const handletodo = (e) => {
        setgroccery(e.target.value)
    }
    const handleadd = async () => {
      let body = {
        task:groccery
      }
      let datas = axios.post("http://localhost:3000/todoList",body)
      alert("data sent successfully")
      handleget()
    }
    const handleget = async () => {
      let datas = await axios.get("http://localhost:3000/todoList")
      // console.log(datas);
      setgroccerylist(datas.data)
    }
    const handledelete = async (id) => {
      let deletedata = await axios.delete("http://localhost:3000/todoList/"+id)
      handleget()
    }
    const handleedit = async (data) => {
      let editeditem = prompt("edit data",data.task)
      let body = {
        task:editeditem
      }
      let editeddata = await axios.put("http://localhost:3000/todoList/" + data.id, body)
      handleget()
    }
  return (
    <div>
        <h1>todo list</h1>
        <label>Groccery</label>
        <input onChange={handletodo} placeholder='enter the list'/>
        <button onClick={handleadd}>submit</button>
        {groccerylist.map((da) => (
          <div>
            <h1>{da.task}</h1>
            <button onClick={()=>handleedit(da)}>EDIT</button>
            <button onClick={()=>handledelete(da.id)}>DELETE</button>
          </div>
        ))}
    </div>
  )
}
