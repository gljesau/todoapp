import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';


function TodoComponents({todoItems, setTodoItems}) {

    function removeCurrentTodo(id){
        let removeTodo = todoItems.filter((todo) => todo.id !== id)


        setTodoItems(removeTodo);
        toast.info('Uspesno ste obrisali task!')
    }


  return (
    <div className='container mx-auto flex flex-col gap-[10px] items-center justify-center mt-[10px]'>

        {todoItems.map((todo) => {
            return <div key={todo.id}className='flex flex-row items-center justify-between bg-green-900 w-[33%] p-[10px] rounded-md'>
                <h2 className='font-extrabold'>{todo.title}</h2>
                <FaDeleteLeft onClick={() => removeCurrentTodo(todo.id)} size={27}/>
            </div>
        })}
    </div>
  )
}

export default TodoComponents