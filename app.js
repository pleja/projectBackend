const express = require('express')
const cors = require ('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/hi', (req, res) => {

    res.send("hello")
    console.log(res);
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))