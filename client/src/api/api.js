import axios from "axios";
const ls = window.localStorage;

const getTasks = () => {
  return JSON.parse(ls.getItem("task"));
};
const addTask = (task) => {
  let old_data = getTasks().data;
  old_data.push(task);
  console.log(old_data);
  ls.setItem(
    "task",
    JSON.stringify({
      data: old_data,
    })
  );
};

const removeElement = (a, index) =>{
    let newArray = [...a]
    newArray.splice(index,1)
    return newArray
}

const deleteTask = (task) => {
  let tasks = getTasks().data;
  tasks.map((e) => {
    if (JSON.stringify(e) === JSON.stringify(task)) {
      console.log(tasks.indexOf(e));
      tasks = removeElement(tasks, tasks.indexOf(e))
    }
  });
  ls.setItem(
    "task",
    JSON.stringify({
      data: tasks,
    })
  );
};

export const deleteTaskRequest = async (task) => {
  return await deleteTask(task);
};

export const getTasksRequest = async () => {
  try {
    if (ls.getItem("task") == null) {
      ls.setItem(
        "task",
        JSON.stringify({
          data: [],
        })
      );
    }
    let data = getTasks();
    
    return await data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createTaskRequest = async (task) => {
  console.log(task);
  addTask(task);

  // return await axios.post('http://localhost:4000/tasks', task)
};

export const getTaskRequest = async (id) => {
  try {
    return await axios.get("http://localhost:4000/tasks/" + id);
  } catch (error) {
    return null;
  }
};

