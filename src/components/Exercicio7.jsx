import { useState, useEffect } from "react";

function Exercicio7() {  
    // Cria estados para armazenar os posts e o status de carregamento.
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Função assíncrona para buscar os posts da API.
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
        } finally {
            setLoading(false);
        }
    };

    // UseEffect para carregar os posts assim que o componente for montado.
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            <h2>Posts</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
            <button onClick={fetchPosts} disabled={loading}>Recarregar</button>
        </div>
    );
}

export default Exercicio7;
