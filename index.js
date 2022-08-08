const express = require('express');
const app = express();
const port = 5000;
const authorsRoutes = require('./routes/authors')
const authorsJsonRoutes = require('./routes/jsonResults')

// app.get('/hello/:name', (req, res) => {
//   let name = req.params.name;
//   res.json({
//     message: `hello ${name}`
//   })
// })

// app.get("*", (req, res) => {
//   res.send('All routes - Erreur 404')
// })

// app.get('/:name', (req, res) => {
//   res.send(`Bonjour ${req.params.name}`)
// })


app.get('/', (req, res) => {
  res.send('Authors API')
})

app.use('/authors', authorsRoutes)
app.use('/json/authors', authorsJsonRoutes)

app.listen(port, () => {
  console.log('Server started')
})

