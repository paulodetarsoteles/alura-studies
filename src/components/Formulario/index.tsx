import React, { useState } from "react";
import Botao from "../Botao";
import ITarefa from "../../types/tarefa";
import {v4 as uuidv4} from "uuid";

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");


    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form 
            onSubmit={adicionarTarefa}
            style={
            { 
                margin: "20px",
                padding: "5px", 
                width: "360px", 
                border: "solid" 
            }}>
            <div style={{ padding: "5px" }}>
                <label htmlFor="tarefa" style={{ padding: "5px" }}>
                    Adicione um estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que estudar?"
                    required
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                />
            </div>
            <div style={{ padding: "5px" }}>
                <label htmlFor="tempo" style={{ padding: "5px" }}>
                    Tempo
                </label>
                <input
                    style={{ padding: "5px" }}
                    type="time"
                    name="tempo"
                    id="tempo"
                    step="1"
                    min="00:00:00"
                    max="01:39:59"
                    required
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                />
            </div>
            <div style={{ padding: "5px" }}>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </div>
        </form>
    )
}

export default Formulario;