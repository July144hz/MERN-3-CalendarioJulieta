import React, { useEffect, useState, useContext } from "react";
import "../styles/Task.css";
import { deleteTaskRequest } from "../api/api";

import { useTasks } from "../context/MyProvider";

function Task(props) {
  const [data, setData] = useState(null);
  const {refresh} = useTasks();

  useEffect(() => {
    let info = props.element;

    setData(info);
  }, []);

  const handleDelete = () => {
    deleteTaskRequest(data.id).then(()=>{
      refresh()
    })
  };

  if (data) {
    return (
      <div
        className="TaskBox"
        style={{ background: data.color, boxShadow: "0 0 5px " + data.color }}
      >
        <button className="TaskBox-DeleteButton" onClick={handleDelete}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
        <span className="task-title">{data.title}</span>
        <span>Inicio: {data.inicio}</span>
        {data.fin ? <span>Fin: {data.fin}</span> : ""}
        
      </div>
    );
  }

  return <></>;
}

export default Task;
