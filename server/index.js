const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '../index.html'))
//     rollbar.info('html file served successfully.')
// })

app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
    rollbar.info('css file served')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})





const port = process.env.PORT || 5000

app.listen(port, () =>  console.log(`Operating on humility ${port}`))