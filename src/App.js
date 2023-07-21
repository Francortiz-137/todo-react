import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {

  const[todoList, setTodoList] = useState([]);


  const[newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length -1].id +1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    console.log(id);
    setTodoList(todoList.map( (task) => {
        return task.id === id? {...task, completed: !task.completed}: task; 
      }));
  }

  return (
    <div className="App">
      <header className='addTask'>
        <input onChange={handleChange} type="text" name="" id="" />
        <button onClick={addTask}>Add Task</button>
      </header>
      <div className='list'>
          {todoList.map( (task) =>{
            return <Task  
                      taskName={task.taskName} 
                      id={task.id}
                      completed={task.completed}
                      deleteTask={deleteTask}
                      completeTask={completeTask}/>;
          }
        )}
      </div>
    </div>
  );
}

export default App;
