const bookModel = (sequelize, DataTypes)=>{
  const Book = sequelize.define('book',{
    bookName: {
      type: DataTypes.STRING,
     
    },
      bookAuthor: {
      type: DataTypes.STRING,
    
    },
    isbn: {
      type: DataTypes.STRING,
      unique: true,
    
    },
    bookPrice: {
      type: DataTypes.FLOAT,
    
    },
    bookGenre: {
        type: DataTypes.STRING,
    },
    
  })
  return Book
}
module.exports = bookModel