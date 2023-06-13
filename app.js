const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()

const send_mail = require("./utils/send_mail")
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.post("/send_mail", async (req, res) => {
    try {
        await send_mail(req.body)
        res.send("OK")
    } catch (error) {
        res.status(400).send({
            message: "something went wrong"
        })
    }
})

app.use((req, res) => {
    res.status(404).send({
        message: "not found"
    })
})

app.listen(PORT, () => {
    console.log("server started!")
})
