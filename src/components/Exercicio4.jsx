import { useState, useEffect } from "react";

function Exercicio4() {
    //Declara seconds iniciando em 0 e setSeconds como função para atualizar seu estado
    const [seconds, setSeconds] = useState(0);
    //Declara um booleano isPaused e setIsPaused para atualizar o estado
    const [isPaused, setIsPaused] = useState(false);

    //Define o useEffect para atualizar os segundos
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setSeconds(prevSeconds => prevSeconds + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    //Serve para lidar com pause do contador 
    const pause = () => {
        setIsPaused(!isPaused);
    }

    //Serve para lidar com reset do contador 
    const reset = () => {
        setSeconds(0);
        setIsPaused(true);
    }
        
    return (
        <>
            <h2>Temporizador</h2>
            <h3>Segundos: {seconds}</h3>
            <div>
                <button onClick={pause}>{ isPaused ? "Resume" : "Pause"}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
        )
}

export default Exercicio4;