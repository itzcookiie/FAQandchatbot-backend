const express = require('express')
const questionsData = require('./questions.json')

const app = express();

app.get('/', (req,res) => {
    res.status(400).send(questionsData)
})

app.listen(8000, () => {
    console.log('Server running on port 8000')
})