// Importação do mongoose
const mongoose = require("mongoose");

//url de conexão = mongodb+srv://user:password@servidor:porta/nomedobanco?retryWrites=true&w=majority
const Conn = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}?retryWrites=true&w=majority`,
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
