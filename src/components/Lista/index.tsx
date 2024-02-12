import ITarefa from "../../types/tarefa";
import Item from "./Item";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {

    return(
        <aside>
            <h2>Estudos</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        key={item.id}
                        selecionaTarefa={selecionaTarefa}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;