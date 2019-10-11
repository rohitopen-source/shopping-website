const Sequelize = require('sequelize')

const db = new Sequelize('shopping','shoppers','shoppass',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 3
    }
})

const User = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

const Product = db.define('products',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:
    {
      type: Sequelize.STRING,
      allowNull: false
    } ,
    manufacturer: Sequelize.STRING,
    price:{
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0

    }


})

db.sync()
     .then(() => console.log("Database has been synced"))
     .catch((err)=> console.error(err))

exports = module.exports = {
    User,Product
}