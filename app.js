const express = require('express')
const app = express()
require("./database/connection.js")

app.get('/books', (req, res) => {
  res.json({

    message : "Books fetched successfully"
  })
})

app.post('/books', (req, res) => {
  res.json({

    message : "Book created successfully"
  })
})

app.delete('/books/:id', (req, res) => {
  res.json({

    message : "Book deleted successfully"
  })
})

app.patch('/books/:id', (req, res) => {
  res.json({

    message : "Book updated successfully"
  })
})




app.listen(3000, () => {
  console.log('Server/backend/node project has started at port 3000')
})