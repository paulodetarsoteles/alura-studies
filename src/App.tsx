import { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Cronometro from './components/Cronometro';
import ITarefa from './types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>
    (
      {
        ...tarefa,
        selecionado: tarefaSelecionada.id === tarefa.id ? true : false
      }
    )));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id)
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          else 
            return tarefa;
        })
      )
    };
  }

  return (
    <div className="App" style={{ flex: "auto", display: "flex" }}>
      <div>
        <Formulario setTarefas={setTarefas} />
        <Cronometro 
          selecionado={selecionado} 
          finalizarTarefa={finalizarTarefa}
        />
      </div>
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
