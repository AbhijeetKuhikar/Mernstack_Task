import express from "express"
import base from "./script.js"
import power from "./script2.js"

let port = 5001
let app = express()

let value = base ** power
console.log(`After execution the value becomes ${value}`)

app.get("/", (req, res) => {
    res.send("got this message from backend !")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})