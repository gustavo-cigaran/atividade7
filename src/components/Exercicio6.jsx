import { useState } from "react";

function Exercicio6() {  
    // Cria estados para armazenar o nome, email, senha, o usuário registrado e o erro.
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    // Função chamada ao submeter o formulário para adicionar o usuário.
    const addUser = () => {

        // Verifica se algum campo está vazio e, se sim, define uma mensagem de erro e interrompe a execução da função.
        if (!name || !email || !password) {
            setError("Todos os campos são obrigatórios!")
            return;
        }

        // Cria um objeto com os dados do usuário.
        const newUser = { name, email, password }
        
        // Atualiza o estado 'user' com as informações do novo usuário.
        setUser(newUser);
        
        // Limpa o estado de erro e os campos do formulário.
        setError("");  
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <h2>Formulário de Registro Simples</h2>

            {/* Se o usuário estiver registrado, exibe uma mensagem de boas-vindas, caso contrário, exibe o formulário. */}
            {user ? (
                <div>
                    <h3>Bem-vindo(a), {user.name}!</h3>
                    <p>Sua conta foi registrada com sucesso.</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                // Formulário de registro, visível caso o usuário ainda não tenha sido registrado.
                <form onSubmit={addUser}>
                    <div>
                        <label>Nome: </label>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome" 
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email" 
                        />
                    </div>
                    <div>
                        <label>Senha: </label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha" 
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}

export default Exercicio6;  
