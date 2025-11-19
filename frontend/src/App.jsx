import { useEffect, useState } from "react";
import { apiGet, apiPost, apiDelete } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // Carregar dados ao abrir
  useEffect(() => {
    apiGet("/users").then(setUsers);
  }, []);

  // Adicionar usuário
  const handleAdd = async () => {
    if (!name.trim()) return;

    const newUser = await apiPost("/users", { name });
    setUsers((prev) => [...prev, newUser]);
    setName("");
  };

  // Remover usuário
  const handleDelete = async (id) => {
    await apiDelete(`/users/${id}`);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div style={{ margin: "40px", fontFamily: "Arial" }}>
      <h1>Sistema Interativo</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Digite um nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <button onClick={handleAdd} style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Adicionar
        </button>
      </div>

      <h2>Lista cadastrada:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            {user.name}
            <button
              onClick={() => handleDelete(user.id)}
              style={{
                marginLeft: "20px",
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
