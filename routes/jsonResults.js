const express = require('express')
const app = express()
const authors = require('../authors.json')

app.get('/:id', (req, res) => {
  const requestedId = req.params.id

  const findAuthorObject = authors.find(author => author.id === Number(requestedId))

  if(findAuthorObject){
    const formattedResult = {
      name: findAuthorObject.name,
      nationality: findAuthorObject.nationality
    }
    res.json(formattedResult)
  }else{
    res.status(404).send('Not found')
  }

})

app.get('/:id/books', (req, res) => {
  const requestedId = req.params.id

  const findAuthorObject = authors.find(author => author.id === Number(requestedId))

  if(findAuthorObject){
    const formattedResult = {
      name: findAuthorObject.books
    }
    res.json(formattedResult)
  }else{
    res.status(404).send('Not found')
  }
})

module.exports = app