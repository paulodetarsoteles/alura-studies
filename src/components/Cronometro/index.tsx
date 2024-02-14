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

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if (contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
        }, 1000);
    }

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
                <Relogio tempo={tempo} />
            </div>
            <div style={{ padding: "5px" }}>
                <Botao
                    onClick = {() => regressiva(tempo)}
                >
                    Iniciar
                </Botao>
            </div>
        </div>
    );
}

export default Cronometro;