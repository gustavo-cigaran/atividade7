import { useState } from "react";

function Exercicio8() {  
    // Array de imagens.
    const images = [
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    
    // Estado para armazenar a imagem selecionada.
    const [selectedImage, setSelectedImage] = useState(null);

    // Função para fechar o modal (desmarcar a imagem selecionada).
    const closeModal = () => setSelectedImage(null);

    // Função para navegar entre as imagens (anterior ou próxima).
    const navigateImages = (direction) => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + direction + images.length) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    return (
        <>
            <h2>Galeria de Imagens</h2>
            <div style={{ display: "flex", gap: "10px" }}>
                {/* Mapeia o array de imagens e exibe cada uma como uma miniatura. */}
                {images.map((image) => (
                    <img key={image} src={image} alt="Thumbnail" style={{ width: "100px", cursor: "pointer" }} onClick={() => setSelectedImage(image)}/>
                ))}
            </div>
        
            {/* Se houver uma imagem selecionada, exibe o modal com a imagem maior. */}
            {selectedImage && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div style={{ position: "relative" }}>
                        <img src={selectedImage} alt="Enlarged" style={{ maxWidth: "50%" }} />
                        <button onClick={closeModal} style={{ position: "absolute", bottom: -50, left: 630 }}>Fechar</button>
                        <button onClick={() => navigateImages(-1)} style={{ position: "absolute", left: 100 }}>Anterior</button>
                        <button onClick={() => navigateImages(1)} style={{ position: "absolute", right: 100 }}>Próxima</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Exercicio8;
