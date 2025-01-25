import { useState, } from 'react'
import './App.css'
import Exercicio1 from './components/Exercicio1';
import Exercicio2 from './components/Exercicio2';
import Exercicio3 from './components/Exercicio3';
import Exercicio4 from './components/Exercicio4';
import Exercicio5 from './components/Exercicio5';
import Exercicio6 from './components/Exercicio6';
import Exercicio7 from './components/Exercicio7';
import Exercicio8 from './components/Exercicio8';
import Exercicio9 from './components/Exercicio9';
import Exercicio10 from './components/Exercicio10';

function App() {
    const [activeExercise, setActiveExercise] = useState(0);
    
    const handleExerciseChange = (exerciseIndex) => setActiveExercise(exerciseIndex);

    return (
        <>
            <h1>Pagina Principal</h1>
            <div className='button-group'>
                <button onClick={() => handleExerciseChange(1)}>Exercício 1</button>
                <button onClick={() => handleExerciseChange(2)}>Exercício 2</button>
                <button onClick={() => handleExerciseChange(3)}>Exercício 3</button>
                <button onClick={() => handleExerciseChange(4)}>Exercício 4</button>
                <button onClick={() => handleExerciseChange(5)}>Exercício 5</button>
                <button onClick={() => handleExerciseChange(6)}>Exercício 6</button>
                <button onClick={() => handleExerciseChange(7)}>Exercício 7</button>
                <button onClick={() => handleExerciseChange(8)}>Exercício 8</button>
                <button onClick={() => handleExerciseChange(9)}>Exercício 9</button>
                <button onClick={() => handleExerciseChange(10)}>Exercício 10</button>
            </div>
            <div>
                {activeExercise == 1 && <Exercicio1/>}
                {activeExercise == 2 && <Exercicio2/>}
                {activeExercise == 3 && <Exercicio3/>}
                {activeExercise == 4 && <Exercicio4/>}
                {activeExercise == 5 && <Exercicio5/>}
                {activeExercise == 6 && <Exercicio6 />}
                {activeExercise == 7 && <Exercicio7 />}
                {activeExercise == 8 && <Exercicio8 />}
                {activeExercise == 9 && <Exercicio9 />}
                {activeExercise == 10 && <Exercicio10 />}
            </div>
        </>
    )
}

export default App
