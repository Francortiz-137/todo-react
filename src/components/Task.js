

const Task = (props) =>{
    return <div className='task'>
                <h1>{ props.completed? <span className="taskCompleted">{props.taskName}</span> : props.taskName}</h1> 
                <button className="deleteTask" onClick={() => props.deleteTask(props.id)}></button>
                <button onClick={() => props.completeTask(props.id)}>Complete</button>
            </div>
            
}


export default Task;