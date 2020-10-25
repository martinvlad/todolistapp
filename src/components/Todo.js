import React from 'react'

function Todo({todos, todo,text, setTodos}) {

    const handleDelete = () =>{
        setTodos(todos.filter(element => element.id !== todo.id));
    }

    const completeCheck = () => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id ){
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item;
        }))
    }

    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} >{text}</li>
            <button onClick={completeCheck} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDelete} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
