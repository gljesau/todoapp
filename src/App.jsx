import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import TodoComponents from "./components/TodoComponents"
import TodoInput from "./components/TodoInput"
import { ToastContainer } from "react-toastify"




function App() {

  const [todoItems, setTodoItems] = useState([]);

  useEffect(()=>{
    console.log(todoItems)
  }, [todoItems])

  
  return (
  <div className='container mx-auto flex flex-col items-center justify-between'>
    <Navbar />
    <TodoInput todoItems={todoItems} setTodoItems={setTodoItems}/>
    <TodoComponents todoItems={todoItems} setTodoItems={setTodoItems}/>
    <ToastContainer />
  </div>
  
  )
}

export default App