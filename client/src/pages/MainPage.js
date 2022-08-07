import React, { useEffect } from "react";
import "../styles/MainPage.css";
import Task from "../components/Task";
import AddButton from "../components/AddButton";
// import { getTasksRequest } from "../api/api.js";

// import {AppContext} from '../context/MyProvider'

import { useTasks } from "../context/MyProvider";

function MainPage() {
  const { tasks, refresh } = useTasks();

  useEffect(() => {
    refresh()
  }, [])
  

  return (
    <div className="MainPage">
      <div className="Calendario">
        <div className="day">
          <span className="SpanLunes">Lunes</span>
          <div className="tasks">
            {tasks !== null
              ? tasks.map((e) => {
                  if (e.dia === "lunes") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}

            <AddButton day="0" />
          </div>
        </div>
        <div className="day">
          <span className="SpanMartes">Martes</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "martes") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="1" />
          </div>
        </div>
        <div className="day">
          <span className="SpanMiercoles">Miercoles</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "miercoles") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="2" />
          </div>
        </div>
        <div className="day">
          <span className="SpanJueves">Jueves</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "jueves") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="3" />
          </div>
        </div>
        <div className="day">
          <span className="SpanViernes">Viernes</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "viernes") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="4" />
          </div>
        </div>
        <div className="day">
          <span className="SpanSabado">Sabado</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "sabado") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="5" />
          </div>
        </div>
        <div className="day">
          <span className="SpanDomingo">Domingo</span>
          <div className="tasks">
            {tasks
              ? tasks.map((e) => {
                  if (e.dia === "domingo") {
                    return <Task element={e} key={e.id}></Task>;
                  }
                  return null;
                })
              : ""}
            <AddButton day="6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
