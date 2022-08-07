import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// get tasks
router.get("/tasks", async (req, res) => {
  let [rows, fields] = await pool.query("select * from tasks");

  if (rows[0]) {
    res.json(rows);
  } else {
    return res.status(404).json({
      message: "Task Not Found",
    });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    let body = req.body;
    console.log(req);
    let { dia, inicio, fin, title, color } =
    body;
    
    let resp = await pool.query(
      `INSERT INTO tasks (dia, inicio, fin, title, color) VALUES ("${dia}", "${inicio}", "${fin}", "${title}", "${color}")`
    );
    
    res.json({
      message: "Enviado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "ERROR AL ENVIAR",
    });
  }
});

router.delete('/tasks/:id', async (req, res) =>{
    try {
        let body = req.body
        let id = req.params.id

        let resp = await pool.query('delete from tasks where id ='+id)

        res.send(resp)
    } catch (error) {
        console.error(error)
    }
})

// router.put('/task/:id', async (req, res) =>{
  //     try {
    //         let body = req.body
    //         let id = req.params.id

//         pool.query('update tasks set ? where id = ?', [
//             body, id
//         ])

//         console.log(body)
//         res.send(body)
//     } catch (error) {
//         console.error(error)
//     }
// })


export default router;
