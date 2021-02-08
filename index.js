import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/contact", (req, res) => {
    res.send("Contact")
})

app.post("/form", (req, res) => {
    res.json("Post page")
})


app.get("/json", (req, res) => {
    res.json([  
        {
            item: 1,
            name: "01"
        },{
            item: 2,
            name:"02"
        }
    ])
})

app.get("/*", (req, res) => {
    res.send("404 not found")
})


app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000")
})
