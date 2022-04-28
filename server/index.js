const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
const app = express()
app.use(express.json())

rollbar = new Rollbar({
    accessToken: 'd4f7e3bb10e543f0ad89e4ca293c905a',
    captureUncaught: true,
    captureUnhandledRejections: true,
  })
  rollbar.log('Hello world!')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
    rollbar.info('html file served successfully.')
})

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
    rollbar.info('css file served')
})






const port = process.env.PORT || 5000

app.use(rollbar.errorHandler())
app.listen(port, () =>  console.log(`Operating on humility ${port}`))