//Importar model do MongoDB
const tarefas = require("./../models/tarefas");

class TarefasService {
  tudo = async () => {
    return await tarefas.find();
  };
  um = async (id) => {
    return await tarefas.findById(id);
  };
  novo = async (tarefa) => {
    return await tarefas.create(tarefa);
  };
  editar = async (id, tarefa) => {
    return await tarefas.updateOne({ _id: id }, tarefa);
  };
  deletar = async (id) => {
    return await tarefas.deleteOne({ _id: id });
  };
}

module.exports = TarefasService;