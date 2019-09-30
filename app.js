const express = require('express')
const cors = require ('cors')
const axios = require('axios')
const app = express()
const port = 3001

app.use(cors())
let dude = "hellow"
app.get('/hi', (req, res) => {
    //console.log()
    axios({
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        params: {
            'convert': "USD"
        },
        headers: {
            'X-CMC_PRO_API_KEY': 'PASTE YOUR KEY HERE!', // PASTE API KEY AFTER THE COLON , make sure API KEY is in quotes
            'cache-control': 'no-cache'
        },
        responseType: 'json'
    }).then(result => {
        let quotes = result.data
        console.log(quotes)
        JSON.stringify(quotes)
        
        res.send(quotes)
        
    }).catch(error => {
        console.log("something wrong")
    });
    //console.log(message)
    console.log(dude)
    
    //console.log(res);
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))