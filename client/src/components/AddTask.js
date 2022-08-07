import React, { useEffect } from "react";
import "../styles/AddTask.css";
import { createTaskRequest } from "../api/api";
import { useTasks } from "../context/MyProvider";

function AddTask(props) {
  const { refresh } = useTasks();

  useEffect(() => {
    return () => {
      try {
        let select = document.getElementById("selectDay");
        select.selectedIndex = props.dia;
      } catch (error) {}

      document.querySelectorAll(".input-title").forEach((element) => {
        console.log("ewq");
        element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add("filled");
          } else {
            event.target.nextElementSibling.classList.remove("filled");
          }
        });
      });
    };
  }, []);

  const handleSend = (e) => {
    let day = document.getElementById("selectDay").value;
    let inputTitle = document.getElementById("inputTitle").value;
    let inicio = document.getElementById("inicio").value;
    let fin = document.getElementById("fin").value;
    let color = document.getElementById("color").value;

    if (day !== "" && inputTitle !== "" && inicio !== "") {
      createTaskRequest({
        dia: day,
        title: inputTitle,
        inicio: inicio,
        fin: fin,
        color: color,
      }).then((resp) => {
        console.log(resp);
        refresh()
      });

      props.show();
    }else{
      alert('Entrada Invalida')
    }
  };

  return (
    <div className="AddTaskBg">
      <div className="AddTaskBox">
        <h3 className="AddTaskBox-title">Agregar Tarea al calendario</h3>
        <select id="selectDay">
          <option value="lunes">Lunes</option>
          <option value="martes">Martes</option>
          <option value="miercoles">Miercoles</option>
          <option value="jueves">Jueves</option>
          <option value="viernes">Viernes</option>
          <option value="sabado">Sabado</option>
          <option value="domingo">Domingo</option>
        </select>
        <div className="inputTitle">
          <input
            type="text"
            name="title"
            id="inputTitle"
            className="input-title"
          />
          <label
            className="inputTitleLabel"
            onClick={(e) => {
              document.getElementById("inputTitle").focus();
            }}
          >
            Titulo
          </label>
        </div>
        <input className="inputTimeAddTask" type="time" name="" id="inicio" />
        <input className="inputTimeAddTask" type="time" name="" id="fin" />

        <input type="color" id="color" className="colorPicker-AddTask" />
        <div className="buttons">
          <button className="btnAdd" onClick={handleSend}>
            Agregar
          </button>
          <button className="btnBack" onClick={props.show}>Volver</button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
