const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    console.log('Client is calling the server');
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    console.log('Client is calling the server API');
    res.json({messsage: 'This is information of client!'});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})