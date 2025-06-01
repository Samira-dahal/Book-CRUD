const bookModel = (sequelize, DataTypes)=>{
  const Book = sequelize.define('book',{
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
   description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bookPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    bookGenre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return Book
}
module.exports = bookModel