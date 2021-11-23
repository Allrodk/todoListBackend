//Importar o mongoose
const mongoose = require("mongoose");

//Collection Jogos
const tarefasModel = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: Number, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const tarefas = mongoose.model("tarefas", tarefasModel);

module.exports = tarefas;
