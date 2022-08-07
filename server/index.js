import express from 'express';
import {pool} from './db.js'
import ROUTES from './routes/tasks.routes.js'
import cors from 'cors'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const app = express();
const PORT = 4000

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors('*'))
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(`<h1>Hello World!</h1>`);
// });

app.get('/ping', async (req,res) =>{
    let [rows, fields] = await pool.query('select 1 + 1')
    res.json(rows[0])
})


app.use(express.static(join(__dirname,'../build')))
app.use(ROUTES)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
