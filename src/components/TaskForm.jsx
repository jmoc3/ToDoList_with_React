import React, {useState} from "react";
import uuid from 'react-uuid'
import '../../public/style/TaskForm.css'

function TaskForm(saveTask){

    const [input, setInput] = useState('')

    const writting = e=>{    
        setInput(e.target.value)
    }

    const saveInfo = e =>{
        e.preventDefault()
        if(input){
            let userText = input.charAt(0).toUpperCase() + input.slice(1);
            
            const content = {
                id:uuid(),
                text:userText,
                state:false
            }
        
            saveTask.onSubmit(content)
            setInput('')
        }
    }

    return(
        <form className="taskForm" onSubmit={saveInfo}>
            <input type="text" className="taskName" placeholder="Write a task" onChange={writting} value={input||''}/>
            <button type="submit" className="sendBtn"> Send </button>
        </form>
    )
}

export default TaskForm