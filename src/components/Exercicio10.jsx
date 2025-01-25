import { useState } from "react";

function Exercicio10() {  
    // Estado para controlar a aba ativa.
    const [activeTab, setActiveTab] = useState("Sobre");

    // Função para renderizar o conteúdo da aba ativa.
    const renderContent = () => {
        switch (activeTab) {
        case "Sobre":
            return <p>Este é o conteúdo da aba Sobre.</p>;
        case "Contato":
            return <p>Este é o conteúdo da aba Contato.</p>;
        default:
            return null;
        }
    };

    return (
        <>
            <h2>Tabs Navegáveis</h2>
            <div style={{ display: "flex", gap: "10px" }}>
                {["Sobre", "Contato"].map((tab) => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        style={{ padding: "10px", borderBottom: activeTab === tab ? "2px solid red" : "none" }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div style={{ marginTop: "20px" }}>{renderContent()}</div>
        </>
    );
}

// Exporta o componente Exercicio10 para ser utilizado em outros lugares.
export default Exercicio10;
