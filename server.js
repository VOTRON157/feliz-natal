const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))
app.get('/', (req, res) => {
  res.send('escreva seu nome nos paramentos ex: /Votron')
})
app.get('/:name', (req, res) => {
 const name = req.params.name || 'seu nome'
 console.log(name)
  res.render('index.ejs', {
    name: name
  })
})

app.listen(port, () => {
  console.log(`ligado em http://localhost:${port}`)
})