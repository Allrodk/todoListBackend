const TarefasService = require("./../services/tarefas.service");
const tarefasService = new TarefasService();
let message = "";

class TarefasController {
  //GET rota que exibe a lista de Tarefas completa
  tudo = async (req, res) => {
    const tarefas = await tarefasService.tudo();
    res.send(tarefas);
  };

  um = async (req, res) => {
    const tarefa = await tarefasService.um(req.params.id);
    res.send(tarefa);
  };

  //POST salvando nova tarefa na lista
  novo = async (req, res) => {
    const tarefa = req.body;
    if (!tarefa) {
      return;
    }
    await tarefasService
      .novo(tarefa)
      .then(() => {
        res.send({ message: `Tarefa ${tarefa.titulo} cadastrado com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };

  //PUT atualiza uma posicao da lista que foi identificada
  editar = async (req, res) => {
    const tarefa = req.body;
    const idParam = req.params.id;
    await tarefasService
      .editar(idParam, tarefa)
      .then(() => {
        res.send({ message: `Tarefa ${tarefa.titulo} alterado com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };

  deletar = async (req, res) => {    
    const idParam = req.params.id;
    await tarefasService
      .deletar(idParam)
      .then(() => {
        res.send({ message: `Tarefa excluído com sucesso` });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).res.send({ message: `Erro no servidor` });
      });
  };
}

module.exports = TarefasController;