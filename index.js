import express from "express";
import mysql from "mysql"
import cors from "cors"

const app = express()
const port = 3040

app.use(express.static("public"))
app.use(cors())
app.use(express.json());

// database connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Kiru9942099420",
    database : "goodhealth"
})

//connection check
db.connect((err,result)=>{
    if(err){
        console.log("error there",err);
    }
    else{
        console.log("successfully connected");
    }
 })

 // login page Url
 app.post("/loginpage",(req,res)=>{
    const {name,gender,dob,mail} = req.body
    let insertsql = "insert into user(name,gender,dob,mail) value(?,?,?,?);";
    db.query(insertsql,[name,gender,dob,mail],(err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send({Status:"loged"});
        }
    });
 });

app.listen(port,()=>{
    console.log("Connected Successfully",port)
})