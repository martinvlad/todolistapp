
import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
  filteredHandler();
  },[todos, status])


  const filteredHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
          default : 
          setFilteredTodos(todos)
          break;
    }
  }
  return (
    <div>
      <header>
    <h1>Martin's Todo List</h1>
      </header>

      
    <h2 style={{textAlign: "center"}}>Enter some todos below!</h2>
    <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} status={status} setStatus={setStatus}/>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
    
  );
}



export default App;
