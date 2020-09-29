const router = require("express").Router()
const fs = require("fs")


const pdfNames = fs.readdirSync(__dirname + "/pdf")



router.route("/:tool").get((req, res) => {

    const searchName = req.params.tool
    const foundPdfs = pdfNames.find(e => e.match(searchName))

    // console.log("http://192.168.178.54:5000/assets/pdf/"+ foundPdfs)
    console.log("https://schneeberger-backend-qe9c481m3.vercel.app/assets/pdf/" + foundPdfs)

    //   res.send("http://192.168.178.54:5000/assets/pdf/"+foundPdfs)
    res.send("https://schneeberger-backend-qe9c481m3.vercel.app/assets/pdf/" + foundPdfs)

    //http://assets.edlixstudios.de/pdf
})


module.exports = router