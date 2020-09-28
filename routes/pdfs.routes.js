const router = require("express").Router()
const fs = require("fs")


const pdfNames = fs.readdirSync(__dirname+"/pdf")



router.route("/:tool").get((req,res)=>{

    const searchName = req.params.tool
    const foundPdfs = pdfNames.find(e => e.match(searchName))

    console.log("http://localhost:5000/assets/pdf/"+ foundPdfs)

    res.send("http://localhost:5000/assets/pdf/"+foundPdfs)
    

})


module.exports = router