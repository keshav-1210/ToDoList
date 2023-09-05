import express from "express";
import bodyParser from "body-parser";
const app = express()
const port = 3000;
var c = 0;
var task = new Array();

var taskt = new Array()

app.get("/", (req, res) => {
    res.render("index.ejs")
    task=[]
    taskt=[]
    c=0
})
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/submit", (req, res) => {
    
    console.log("here")
    var t = new Date(req.body["time"])
    console.log(t)
    if(task.includes(req.body["description"])||taskt.includes(t)){
  console.log("repeated task")
    }
   else{c++
   task.push(req.body["description"])
   taskt.push(t.toLocaleString('en-GB', { timeZone: 'IST' }))}


    console.log(taskt)
    res.render("index.ejs", { c, task, taskt })
})

app.listen(port, () => {
    console.log(` listening on port ${port}`)
})