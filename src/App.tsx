import { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Cronometro from './components/Cronometro';
import ITarefa from './types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    
  return (
    <div className="App" style={{ flex: "auto", display: "flex" }}>
      <div>
        <Formulario setTarefas={setTarefas} />
        <Cronometro />
      </div>
      <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;
