import { useState, useEffect } from "react";

function Exercicio9() {
    // Cria estados para controlar o tempo restante e se o timer está rodando.
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // UseEffect para atualizar o tempo a cada segundo enquanto o timer estiver rodando.
    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prev) => prev - 1);
            }, 1000);
        } else if (time === 0 && isRunning) {
            alert("O tempo acabou!");
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    // Função para resetar o timer.
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <>
            <h2>Timer</h2>
            <input type="number" placeholder="Digite os segundos" value={time} onChange={(e) => setTime(Number(e.target.value))} disabled={isRunning}/>
            <p>Tempo restante: {time}s</p>
            <button onClick={() => setIsRunning(true)} disabled={isRunning || time <= 0}>Iniciar</button>
            <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Pausar</button>
            <button onClick={resetTimer} disabled={time === 0}>Reiniciar</button>
        </>
    );
}

export default Exercicio9;
