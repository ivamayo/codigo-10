import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// const t1 ={
//     id:1,
//     text: "Bañarme",
//     created_at:new Date(),
// }

// const t2 ={
//     id: 2,
//     text: "Acostarme",
//     create_at:new Date(),
// }
const tasks =[];
// tasks.push(t1);
// tasks.push(t2);

app.get("/", (req,res) =>{
    return res.json({
        mensaje:"Hola"
    });
});

//GET: generalmente se usa para pedirle datos al servidor:
app.get("/puerta", (req, res)=> {
    return res.json({
        tasks: tasks,
    });
});

//POST: generalmente se usa para enviarle datos al servidor:
app.post("/puerta", (req, res) =>{
    const task = req.body;
    tasks.push(task);
    //le voy a responder al cliente
    res.json({
        message: "ok",
    });
});

//PUT:

//DELETE:

app.listen(4000);