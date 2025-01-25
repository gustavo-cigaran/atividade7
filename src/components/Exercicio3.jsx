import { useState } from "react";

function Exercicio3() {
    //Declara tasks como um array vazio e setTasks para atualizar seu estado
    const [tasks, setTasks] = useState([]);
    //Declara inputValue como "" e setInputValue como responsável por atualizar seu estado
    const [inputValue, setInputValue] = useState("");
    //Declara o filter como "all" por padrão (por se tratar de um filtro) e setFilter para atualizar seu estado
    const [filter, setFilter] = useState("all");

    //Função para adicionar tarefa
    const addTask = () => {
        if (inputValue.trim() === "") return;

        const newTask = {
            id: Date.now(),
            name: inputValue,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    //Função para remover tarefa
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    //Função para definir que a tarefa está completa
    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    //Filtro para tarefas
    const filteredTasks = tasks.filter(task => filter === "all" ? true : !task.completed);

    return (
        <>
            <div>
                <h2>To Do List</h2>
                <label>Nova Tarefa: </label>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                <button onClick={() => setFilter("all")}>Todas</button>
                <button onClick={() => setFilter("pending")}>Pendentes</button>
            </div>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        <span onClick={() => toggleComplete(task.id)} style={{ cursor: "pointer" }}>
                            {task.name}
                        </span>
                        <button onClick={() => removeTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Exercicio3;