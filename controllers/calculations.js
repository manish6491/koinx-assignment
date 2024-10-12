const models = require("../models/model.js")

const standard_deviation = async (req, res) => {
    console.log(req.body)
    const coin_name = req.body["coin_name"]
    const vsCurrency = "usd"
    const days = "99"
    const precision = "0"
    const URL = `https://api.coingecko.com/api/v3/coins/${coin_name}/market_chart?vs_currency=${vsCurrency}&days=${days}&precision=${precision}`
    await fetch(URL)
        .then(res => {
            return res.json()
        }).then (data => {
            // console.log(data.prices.length)
            // console.log(data.prices)
            prices = []
            length = data.prices.length
            for(let i = 0; i < length; i++) {
                prices.push(data.prices[i][1])
            }
            // console.log(prices)
            
            let mean = 0
            for(let i = 0; i < length; i++) {
                mean += prices[i]
            }
            mean = Math.floor(mean / length)
            // console.log(mean)

            deviation = 0
            for(let i = 0; i < length; i++) {
                deviation += (prices[i] - mean) ** 2
            }
            deviation = Math.sqrt(deviation / 100).toFixed(2)

            res.json({
                "deviation": deviation
            })
        
        }).catch(error => {
            console.log(error)
        })
}

const statistics = async (req, res) => {
    const coin_name = req.body.coin_name

    const URL = "https://api.coingecko.com/api/v3/coins/"
    await fetch(URL+coin_name)
        .then(res => {
            return res.json()
        }).then (data => {
            let current_price = data.market_data.current_price.usd
            let market_cap = data.market_data.market_cap.usd
            let change_in_24h = data.market_data.price_change_24h

            res.json({
                "current_price": current_price,
                "market_cap": market_cap,
                "change_in_24h": change_in_24h
            })
        
        }).catch(error => {
            console.log(error)
        })
}

module.exports = {standard_deviation, statistics}