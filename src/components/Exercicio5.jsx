import { useState } from "react";  

function Exercicio5() {  

    // Cria uma constante 'names' com um array de nomes.
    const names = ["Gustavo", "Ana", "Bia"];  

    // Cria o estado 'filter' para armazenar o valor do filtro (inicialmente vazio) e a função 'setFilter' para atualizar esse valor.
    const [filter, setFilter] = useState("");  

    // Função para lidar com a mudança no valor do campo de filtro (input) atualizando o estado com o valor digitado no input.
    const handleFilterChange = (event) => {  
        setFilter(event.target.value);  
    }

    // Filtra os nomes com base no valor do filtro (ignorando maiúsculas/minúsculas) verificando se o nome contém o texto do filtro, sem considerar o caso das letras.
    const filteredNames = names.filter(name => 
        name.toLowerCase().includes(filter.toLowerCase())  
    );

    return (
        <>
            <div>
                <h2>Filtro de nomes</h2>  
                <input 
                    type="text"  
                    placeholder="Digite um nome"  
                    value={filter}  
                    onChange={handleFilterChange}  
                />
            </div>
            <ul>  
                { filteredNames.map((name, index) => (
                    <li key={index} style={{ listStyleType: "none" }}>{name}</li>  
                    ))
                }
            </ul>
        </>
    );
}

export default Exercicio5;  
