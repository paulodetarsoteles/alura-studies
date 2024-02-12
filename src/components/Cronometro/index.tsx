import { tempoParaSegundos } from "../../utils/date";
import Botao from "../Botao";
import Relogio from "./Relogio";

function Cronometro() {
    console.log("Teste de conversão: ", tempoParaSegundos("01:01:01"));
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