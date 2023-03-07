module.exports = {
  HOST: "localhost",
  USER: "irina",
  PASSWORD: "irina",
  DB: "newusers",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};