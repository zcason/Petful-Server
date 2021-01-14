const express = require('express')
const cors = require('cors')
const PeopleRouter = require('../people/people.router')
const PetsRouter = require('../pets/pets.router')

const app = express()

app.use(cors())


app.use('/people', PeopleRouter)
app.use('/pets', PetsRouter)


module.exports = app
