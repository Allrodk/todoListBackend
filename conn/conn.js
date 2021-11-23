// Importação do mongoose
const mongoose = require("mongoose");
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const base = process.env.DB_BASE;

//url de conexão = mongodb+srv://user:password@host/nomedobanco
const Conn = () => {
  mongoose
    .connect(      
      `mongodb+srv://${user}:${pass}@${host}/${base}`,
      {       
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Conectado");
    })
    .catch((err) => console.log("Falha de conexao com o MongoDB Atlas", err));
};

//Exporta função Conn
module.exports = Conn;
