import axios from 'axios'


export const deleteTaskRequest = async (id) =>{
    return await axios.delete("http://localhost:4000/tasks/"+id)
}

export const getTasksRequest = async () =>{
    try {
        return await axios.get("http://localhost:4000/tasks")
    } catch (error) {
        console.log(error)
        return null
    }
    
}

export const createTaskRequest = async (task) =>{
    return await axios.post('http://localhost:4000/tasks', task)
}

export const getTaskRequest = async (id)=>{
    try {
        return await axios.get("http://localhost:4000/tasks/"+id)
    } catch (error) {
        return null
    }
    
}

export const updateTaskRequest = async (id, newFields)=>{
    return await axios.put("http://localhost:4000/task/"+id, newFields)
}