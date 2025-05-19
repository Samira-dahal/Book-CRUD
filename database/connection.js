const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize("postgresql://postgres.zntihjoqupxldytapxmu:i always secure data with strong password@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

    const db = {}
    db.Sequelize = Sequelize,
    db.sequelize = sequelize




db.books = require("./models/book.model")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize, DataTypes)
db.categories = require("./models/categories.model")(sequelize, DataTypes)


sequelize.sync({ alter: false })
    .then(() => {
        console.log('Database & tables created!');
    })
    module.exports = db;