'use strict'
const { MongoClient } = require('mongo')
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
}

const mongoUrl = `mongodb://${DB.USER}:${DB.PASSWORD}@${DB.HOST}:${DB_PORT}/${DB_NAME}`
let connection

async function connectDB(){
    if(connection) return connection
let client
try {
    client = await MongoClient.connect(mongoUrl, {
        useNewUrlParser: true
    })
    connection = client.db(DB_NAME)
} catch (error) {
    console.error('No se puede conectar', mongoUrl, error)
}
    return connection
}

module.exports = connectDB