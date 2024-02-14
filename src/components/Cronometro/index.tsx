import { useEffect, useState } from "react";
import ITarefa from "../../types/tarefa";
import { tempoParaSegundos } from "../../utils/time";
import Botao from "../Botao";
import Relogio from "./Relogio";

interface Props {
    selecionado: ITarefa | undefined
}

function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo))
    }, [selecionado]);

    return (
        <div style={
            {
                margin: "20px",
                padding: "5px",
                border: "solid",
                width: "360px"
            }}>
            <h4>Escolha uma tarefa para iniciar</h4>
            <div style={{ padding: "5px" }}>
                <Relogio />
            </div>
            <div style={{ padding: "5px" }}>
                <Botao>
                    Iniciar
                </Botao>
            </div>
        </div>
    );
}

export default Cronometro;