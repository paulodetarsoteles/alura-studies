import ITarefa from "../../types/tarefa";
import Item from "./Item";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside>
            <h2>Estudos</h2>
            <div>
                <h5 style={{ color: "blue", margin: "0px" }}>LEGENDA:</h5>
                <p style={{ color: "red", margin: "0px" }}>Vermelho: selecionada</p>
                <p style={{ color: "green", margin: "0px" }}>Verde: concluída</p>
            </div>
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