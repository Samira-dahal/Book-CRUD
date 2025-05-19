const categoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Category;
}
module.exports = categoryModel;