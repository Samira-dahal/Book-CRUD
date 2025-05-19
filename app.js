const express = require('express')
const { books } = require('./database/connection')


const app = express()
require("./database/connection")
app.use(express.json())

app.get('/books',async (req, res) => {
  const datas = await books.findAll()
  res.json({

    message : "Books fetched successfully",
    data : datas
  })
})

app.post('/books',async (req, res) => {
  const {bookName,bookAuthor, isbn, bookPrice, bookGenre} = req.body
 await books.create({
    bookName,
    bookAuthor,
    isbn,
    bookPrice,
    bookGenre
  })

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