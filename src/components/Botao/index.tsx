import React from "react";

class Botao extends React.Component<{ 
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void 
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button type={type} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;