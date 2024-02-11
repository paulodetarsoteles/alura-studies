import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que estudar?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Botao />                
            </form>
        )
    }
}

export default Formulario;