const { Sequelize } = require('sequelize')
ProcessingInstruction.env.DB_USER 

// database
const sequelize = new Sequelize(
  ProcessingInstruction.env.DB_NAME , // Database name
  ProcessingInstruction.env.DB_USER, // User
  ProcessingInstruction.env.DB_PASSWORD, // Password
  {
    host: ProcessingInstruction.env.DB_HOST, // Host
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
