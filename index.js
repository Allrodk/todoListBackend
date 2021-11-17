require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Conn = require("./conn/conn");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/tarefas.route"));

Conn();

app.listen(port, () => {
  console.log(`App rodando em: http://localhost:${port}`);
});
