const mongoose = require("mongoose")

const bitcoinSchema = mongoose.Schema({
    current_price: {
        type: Number,
        required: true
    }, 
    market_cap: {
        type: Number,
        required: true
    }, 
    change_in_24h: {
        type: Number,
        required: true
    }
}, { collection: 'Bitcoin' }, {timestamps: true})

const maticSchema = mongoose.Schema({
    current_price: {
        type: Number,
        required: true
    }, 
    market_cap: {
        type: Number,
        required: true
    }, 
    change_in_24h: {
        type: Number,
        required: true
    }
}, { collection: 'Matic' }, {timestamps: true})

const ethereumSchema = mongoose.Schema({
    current_price: {
        type: Number,
        required: true
    }, 
    market_cap: {
        type: Number,
        required: true
    }, 
    change_in_24h: {
        type: Number,
        required: true
    }
}, { collection: 'Ethereum' }, {timestamps: true})

const Bitcoin = mongoose.model("Bitcoin", bitcoinSchema)
const Matic = mongoose.model("Matic", maticSchema)
const Ethereum = mongoose.model("Ethereum", ethereumSchema)

module.exports = {Bitcoin, Matic, Ethereum}

