import React, { useState } from 'react';
import { toast } from 'react-toastify';


function TodoInput({todoItems, setTodoItems}) {

  const [currentTodo, setCurrentTodo] = useState('');

  function changeTodoInput(event){
    setCurrentTodo(event.target.value)
  }

  function handleTodo(){
    if(currentTodo){
         setTodoItems([...todoItems, {title: currentTodo, id: new Date().getTime()}]);
         setCurrentTodo('');
         toast.success('Uspesno ste uneli' + ' ' + currentTodo + ' ' + 'task!')
    }else{
      toast.warning('Nisi uneo nikakav task!')
    }
 
  }

     function removeAllCurentTodo(){
          if(todoItems.length === 0){
            // toast.error('Nema unetih taskova za brisanje')
          }else{
            setTodoItems([]);
          toast.error('Uspesno ste obrisali sve taskove!')
          }
      }



	return (
		<div className='flex flex-col items-center gap-[10px] mt-[100px]'>
			<input
				className='outline-none border rounded-lg p-[20px] border-green-700 text-green-700 font-extrabold'
				type='text'
				placeholder='Ubaci task koji zelis'
        onChange={changeTodoInput}
        value={currentTodo}
			/>
      <div className='flex flex-row justify-between gap-[10px]'>
			<button onClick={handleTodo} className='rounded-lg bg-green-700 text-white font-extrabold h-[70] w-[125px]'>
				Dodaj task
			</button>
      <button onClick={removeAllCurentTodo}className='rounded-lg bg-red-500 text-white font-extrabold h-[50px] w-[125px]'>
				Obrisi sve taskove
			</button>
</div>
		</div>
	);
}

export default TodoInput;
