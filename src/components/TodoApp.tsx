/*type Props = {}*/

import { useState } from "react"
export const TodoApp = ()=>{
    const [nuevaTarea, setNuevaTarea]=useState('')
    return(
        <div>
            <h1>lista de tareas</h1>
            <div>
                <input
                type="text"
                value={nuevaTarea}
                onChange={(e)=>setNuevaTarea(e.target.value)}
                placeholder="nueva tarea"
                />
            </div>
        </div>
    )
}