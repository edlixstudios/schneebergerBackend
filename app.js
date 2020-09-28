const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()


app.use(express.json())
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,"assets")))

// Routes
const pdfs = require("./routes/pdfs.routes")
app.use("/pdf",pdfs)

app.get("/",(req,res)=>{
    res.send("Server online")
})


app.listen(5000,()=>{
    console.log("Listen on port http://localhost:5000")
})