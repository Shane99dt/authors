const express = require('express')
const app = express()
const authors = require('../authors.json')

app.get('/:id', (req, res) => {
  const requestedId = req.params.id

  const findAuthorObject = authors.find(author => author.id === Number(requestedId))

  if(findAuthorObject){
    res.json(`${findAuthorObject.name}, ${findAuthorObject.nationality}`)
  }else{
    res.status(404).send('Not found')
  }

})

app.get('/:id/books', (req, res) => {
  const requestedId = req.params.id

  const findAuthorObject = authors.find(author => author.id === Number(requestedId))

  if(findAuthorObject){
    res.json(findAuthorObject.books.join(", "))
  }else{
    res.status(404).send('Not found')
  }
})

module.exports = app