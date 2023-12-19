//***************** Import Dependencies ******************//
const express = require('express')
const { appendFile } = require('fs')
require('dotenv').config()
const path = require('path')


//*****************Import Routers *********************//
app.get('/', (req, res) => {//<-- basic home route
    res.send('app is connected')
})
//****************** Create app object ******************//
const app = express() //<-- call the express function

//****************** Middleware ***********************//

//******************* Routes *************************//

//******************* Sever Listener ********************//
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log('server running')
})