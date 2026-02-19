import axios from "axios";

/**
 * IMPORTANTE:
 * Cole aqui o link do seu Cloudflare Tunnel (SEM barra no final),
 * exemplo: https://abc-def-ghi.trycloudflare.com
 */
const BASE_URL = "https://SEU-LINK.trycloudflare.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default api;

export const getStudents = async () => {
  try {
    const res = await api.get("/students");
    return res.data;
  } catch (err) {
    console.error("Erro ao buscar alunos:", err?.message || err);
    return [];
  }
};

export const getTickets = async () => {
  try {
    const res = await api.get("/tickets");
    return res.data;
  } catch (err) {
    console.error("Erro ao buscar tickets:", err?.message || err);
    return [];
  }
};
