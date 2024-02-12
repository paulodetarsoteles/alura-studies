import React from "react";
import Botao from "../Botao";
import ITarefa from "../../types/tarefa";

class Formulario extends React.Component<{ setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    }

    render() {
        return (
            <form 
                onSubmit={this.adicionarTarefa.bind(this)}
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
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
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
                        max="06:30:00"
                        required
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
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
}

export default Formulario;