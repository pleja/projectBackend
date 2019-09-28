const express = require('express')
const cors = require ('cors')
const axios = require('axios')
const app = express()
const port = 3001

app.use(cors())
let dude = "hellow"
app.get('/hi', (req, res) => {
    let message;
    axios({
        method: 'get',
        url: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/map',
        params: {
            'symbol': 'BTC,USDT,BNB'
        },
        headers: {
            'X-CMC_PRO_API_KEY': '1277fdcd-7db4-4d4b-baa1-5cafe999d92f',
            'cache-control': 'no-cache'
        },
        responseType: 'json'
    }).then(result => {
        let quotes = result.data.data
        JSON.stringify(quotes)
        console.log(quotes)
        message = quotes
        res.send(message)
        
    });
    console.log(message)
    console.log(dude)
    
    //console.log(res);
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))