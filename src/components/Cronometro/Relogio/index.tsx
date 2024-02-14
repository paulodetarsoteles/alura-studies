interface Props {
    tempo: number | undefined
}

function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = minutos.toString().padStart(2, '0');
    const [segundoDesena, segundoUnidade] = segundos.toString().padStart(2, '0');

    return (
        <>
            <span>{minutoDezena}</span>
            <span>{minutoUnidade}</span>
            <span>:</span>
            <span>{segundoDesena}</span>
            <span>{segundoUnidade}</span>
        </>
    );
}

export default Relogio;