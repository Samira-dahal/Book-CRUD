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





    module.exports = db;