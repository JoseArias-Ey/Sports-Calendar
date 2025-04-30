import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getTodos = () => api.get("/todos");

export { getTodos };
