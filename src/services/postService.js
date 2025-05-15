import axios from "axios";

const api = axios.create({
  baseURL: "https://sportback-bkgwhmgphububget.centralus-01.azurewebsites.net",
});

const getTodos = () => api.get("/Todo/GetAll");

export { getTodos };
