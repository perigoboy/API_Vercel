const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiGet(path) {
  const response = await fetch(`${API_URL}${path}`);
  return response.json();
}

export async function apiPost(path, data) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function apiDelete(path) {
  const response = await fetch(`${API_URL}${path}`, { method: "DELETE" });
  return response.json();
}
