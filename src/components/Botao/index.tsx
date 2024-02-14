interface Props {
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined,
    children?: any
}

function Botao({onClick, type, children}: Props) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao;