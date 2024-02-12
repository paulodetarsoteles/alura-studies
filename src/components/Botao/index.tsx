import React from "react";

class Botao extends React.Component<{ 
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined 
}> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;