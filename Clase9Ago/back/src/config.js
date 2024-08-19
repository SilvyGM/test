require("dotenv").config();

module.exports = {
  app: {
    port: process.env
      .PORT /* si no encuentra un puerto designado por default use el 4000 */,
  },
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
};
