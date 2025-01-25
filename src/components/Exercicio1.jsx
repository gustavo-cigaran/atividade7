import { useState } from "react";

function Exercicio1() {
    //Declara o count como 0 e a função responsável por atualizar seu estado;
    const [count, setCount] = useState(0);

    //Cria a função increase que incrementa o valor de count em 1, toda vez que ela for chamada, vai atualizar o estado com setCount
    const increase = () => setCount(count + 1);

    //Cria a função decrement que decrementa o valor de count em 1, mas somente se o count for diferente de 0
    const decrement = () => count !== 0 ? setCount(count - 1) : setCount(0);

    return (
        <>
            <div>
                <h2>Contador top demais!</h2>
                <p>{count}</p>
                <button onClick={increase} disabled={count === 10}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
            </div>
        </>
    );
}

export default Exercicio1