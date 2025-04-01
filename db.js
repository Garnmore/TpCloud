const { Sequelize } = require('sequelize')
var user ="root"
var password="Lw1K8TYOLjMngm8Pc9veBRCmgYCWQDht"
var db = "TpCloud"
var host = "dpg-cvlv33fgi27c73agdqn0-a"
// database
const sequelize = new Sequelize(
  user, // Database name
  password, // User
  db, // Password
  {
    host: host, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
