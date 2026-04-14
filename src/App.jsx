import Counter from "./Components/Counter"
import ApiCallOne from "./Components/ApiCallOne"
import Character from "./Components/Character"
import UserForm from "./Components/UserForm"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import TodoList from "./Components/TodoList"
import MovieBook from "./Components/MovieBook"
import { useState } from "react"
import { CounterProvider } from "./Components/context/CounterProvider"

function App() {
  const [moviedata,setmoviedata] = useState([
    {
    name:"Inception",
    rent:200,
    },
    {
    name:"The Prisioner",
    rent:160,
    },
    {
    name:"Untold Story",
    rent:190,
    },
  ])
  const handleclick = (num) => {
    console.log(num);
    
  }
  return (
    <BrowserRouter>
      {/* <Link to="/">Counter</Link>
      <Link to="/products" >Product</Link>
      <Link to="/about">About</Link>
      <Link to="userForm">contact</Link>
      <Link to="/home">main</Link>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/products" element={<ApiCallOne />} />
        <Route path="/about" element={<Character />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
      {/* <LifeCycle/> */}
      {/* <TodoList/> */}
      {/* {moviedata.map((da) => (
        <MovieBook handleclick={handleclick} name={da.name} rent={da.rent}/>
      ))} */}
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </BrowserRouter>
  )
}

export default App