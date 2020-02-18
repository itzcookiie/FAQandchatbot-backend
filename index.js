const express = require('express')
const questionsData = require('./questions.json')
const chatbotData = require('./chatbot.json')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/questions', (req,res) => {
    res.status(200).send(questionsData)
})

app.post('/chatbot', (req,res) => {
    const userMessage = req.body.message
    switch(userMessage) {
        case 'intro': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'findQuestions': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'findAnswer': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'askMore': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'help': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'other': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
        case 'finish': {
            const responseData = chatbotData.filter(data => data.action === userMessage)
            const message = responseData.map(responseObj => responseObj.response.message)
            return res.status(200).send({message})
        }
    }
})

app.listen(8000, () => {
    console.log('Server running on port 8000')
})