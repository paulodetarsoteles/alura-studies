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

  return (
    <div className="App" style={{ flex: "auto", display: "flex" }}>
      <div>
        <Formulario setTarefas={setTarefas} />
        <Cronometro />
      </div>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
