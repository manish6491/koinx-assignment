const { model } = require("mongoose")
const schedule = require("node-schedule")
const request = require("request")

const models = require("../models/model.js")

const URL = "https://api.coingecko.com/api/v3/coins/"

// Used crontab expression for scheduling job every 2 hours
const job_1 = schedule.scheduleJob("*/2 * * * *", async ()=> {
    // Fetching Bitcoin Data 
    await fetch(URL+"bitcoin")
        .then(res => {
            return res.json()
        }).then (async (data) => {
            let current_price = data.market_data.current_price.usd
            let market_cap = data.market_data.market_cap.usd
            let change_in_24h = data.market_data.price_change_24h

            const bitCoinData = new models.Bitcoin({
                current_price: current_price,
                market_cap: market_cap,
                change_in_24h: change_in_24h
            })

            await bitCoinData.save()
        
        }).catch(error => {
            console.log(error)
        })
    
    // Fetching Matic Data 
    await fetch(URL+"matic-network")
        .then(res => {
            return res.json()
        }).then(async (data) => {
            let current_price = data.market_data.current_price.usd
            let market_cap = data.market_data.market_cap.usd
            let change_in_24h = data.market_data.price_change_24h

            const maticCoinData = new models.Matic({
                current_price: current_price,
                market_cap: market_cap,
                change_in_24h: change_in_24h
            })

            await maticCoinData.save()
        }).catch(error => {
            console.log(error)
        })

    // Fetching Ethereum Data 
    await fetch(URL+"ethereum")
        .then(res => {
            return res.json()
        }).then(async (data) => {
            let current_price = data.market_data.current_price.usd
            let market_cap = data.market_data.market_cap.usd
            let change_in_24h = data.market_data.price_change_24h

            const ethCoinData = new models.Ethereum({
                current_price: current_price,
                market_cap: market_cap,
                change_in_24h: change_in_24h
            })

            await ethCoinData.save()
        }).catch(error => {
            console.log(error)
        })
    
})



module.exports = job_1