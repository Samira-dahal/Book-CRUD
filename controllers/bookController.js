const { books } = require("../database/connection");

exports.fetchBooks = async (req, res) => {
  const datas = await books.findAll()
  res.json({

    message : "Books fetched successfully",
    data : datas
  })
}

exports.createBooks = async (req, res) => {
  const { bookName, bookAuthor, isbn, description,  bookPrice, bookGenre } = req.body;

  if (!bookName || !bookAuthor || !isbn || !description || !bookPrice || !bookGenre) {
    return res.status(400).json({
      error: "All fields are required."
    });
  }

  try {
    await books.create({
      bookName,
      bookAuthor,
      isbn,
      description,
      bookPrice,
      bookGenre
    });

    res.json({
      message: "Book created successfully"
    });

  } catch (err) {
    console.error("Sequelize Error:", err);

    res.status(500).json({
      error: "An error occurred while creating the book.",
      details: err.errors ? err.errors.map(e => e.message) : err.message
    });
  }
}

exports.deleteBooks =  async(req, res) => {
     const id = req.params.id 
    await books.destroy({
        where : {
            id
        }
    }) 
    res.json({
      message : "Book Deleted successfully"
    })
}

exports.updateBooks = async (req, res) => {
  try {
    const id = req.params.id
    const {bookName,bookPrice, isbn, description, bookAuthor,bookGenre} = req.body

    await books.update({bookName,bookPrice, isbn, description, bookAuthor,bookGenre },{
        where : {
            id : id
        }
    })

    res.json({
      message : "Book updated successfully"
    })
   } catch (error) {
    res.json({
        message : "Something went wrong"
    })
   }
}

exports.singlefetchBook = async function(req, res){
  const id = req.params.id 
    const datas = await books.findByPk(id) 
    res.json({
        message : "Single Book fetched successfully", 
        datas, 
    })

}
