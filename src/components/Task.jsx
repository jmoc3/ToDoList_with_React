import React from "react";
import '../../public/style/Task.css'
import { CiSquareRemove } from 'react-icons/ci'

function Task({id, text, state,completeTask,deleteTask}){
    return (
        <div className={state ? "parentTask completed" : "parentTask"}>
            <span id={id} className="textHome" onClick={()=>completeTask(id)}>{text}</span>
            <div className={state ? "icon iconComplete" : "icon"}><CiSquareRemove onClick={()=>deleteTask(id)}/></div>
        </div>
    )
}

export default Task