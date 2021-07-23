const express = require("express")
const cors = require("cors")
const logger = require("morgan");


const app = express()
app.use(cors())
app.use(logger("common"))
app.use(express.json())
const landlordRouter = require("./routes/landlordRouter.js")


app.use("/landlord",landlordRouter)

app.listen(2000,()=>{console.log(`listening at port ${4000}`)})