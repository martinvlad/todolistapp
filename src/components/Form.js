import React from 'react'

function Form({setInputText, setTodos, todos, inputText, setStatus}) {
    const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random()*1000 }
    ]);
    setInputText('');
    }
    const inputTextHandler = (e) =>{
       
        setInputText(e.target.value);
    }
    const changeStatus = (e) =>{
setStatus(e.target.value)

    }
    return (
        
           <form onSubmit={handleSubmit}>
      <input style={{borderRadius: "30px"}} value={inputText}type="text" className="todo-input"onChange={inputTextHandler} />
      <button  className="todo-button" type="submit"  >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={changeStatus}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form> 
   
    )
}

export default Form
