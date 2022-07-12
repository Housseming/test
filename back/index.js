const bodyParser = require("body-parser");

const express = require ("express");
const app = express();
app.use(bodyParser.json()); 
const cors = require("cors");
const pool =require("./db")
//middleware
app.use(cors());
app.use(express.json());
//RouTES
//create a todo 
app.post("/todos", async(req, res) => {
    try{
    const {username,password} =req.body;
   const id=username+password
   
    const newTodo=await pool.query("INSERT INTO registration (id,username,password) VALUES($1,$2,$3 )",
    [id,username,password]);
    res.json(newTodo);
    
    
    }
    catch(err){
        console.error(err.message);
    }   
}
//get all todos
//get a todo
//update a todo 


    );
app.listen(5000,()=> { console.log("running server on 5000");
}) 