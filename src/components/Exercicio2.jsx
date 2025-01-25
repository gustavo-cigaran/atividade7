import { useState, useEffect } from "react";

function Exercicio2() {
    //Declara activeColor como '' e a função setColor como a responsável por atualizar seu estado
    const [activeColor, setColor] = useState('');

    //Função que tem como objetivo gerar uma cor aleatória através de um algoritmo de combinação entre letras e números, chegando a um valor em hexadecimal
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //Função responsável por "lidar" com a mudança de cores, atualizando o estado com setColor junto a getRandomColor para gerar a cor aleatória
    const handleColorChange = () => {
        setColor(getRandomColor());
    }

    //Atualiza o plano de fundo com o activeColor
    useEffect(() => {
        document.body.style.backgroundColor = activeColor;
    }, [activeColor]);

    return (
        <>
            <div>
                <h2>Mudar Background!</h2>
                <button onClick={handleColorChange}>Mudar cor de fundo</button>
            </div>
        </>
    );
}

export default Exercicio2;