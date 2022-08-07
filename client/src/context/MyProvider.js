import React, { createContext, useContext, useEffect, useState } from "react";
import {getTasksRequest} from '../api/api'

const AppContext = createContext();

function MyProvider(props) {
  

  const [tasks, setTasks] = useState(null);

  const refresh = () =>{
    try {
      getTasksRequest().then((resp) => {
        if (resp!== null){
          let tasks = resp.data
    
          tasks.sort((a,b)=>{
            let a_i = a.inicio
            let a_f = a.fin
            let b_i = b.inicio
            let b_f = b.fin
    
            a_i = a_i.split(':')
            a_f = a_f.split(':')
            b_i = b_i.split(':')
            b_f = b_f.split(':')
    
            if (a_i[0]==b_i[0]){
              return 0
            }else if (a_i[0]<b_i[0]) {
              return -1
            }
            return 1
          })
    
          setTasks(tasks);
        }else{
          setTasks(null)
        }
      });
    } catch (error) {
      setTasks(null)
    }
  }

  useEffect(() => {
    return () => {
      refresh()
      setTimeout(() => {
        refresh()
      }, 3000);
    };
  }, []);

  const value = React.useMemo(()=>{
    return({
      tasks,
      setTasks,
      refresh
    })
  }, [tasks, setTasks, refresh])


  return (
    <div>
      <AppContext.Provider value={value} {...props} />
    </div>
  );
}

export default MyProvider;

export function useTasks(){
  const context = useContext(AppContext)
  if (!context){
    throw new Error('ERROR!')
  }
  return context;
}