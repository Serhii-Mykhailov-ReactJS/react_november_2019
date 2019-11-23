// Core
import axios from 'axios';

class Api {
  constructor() {
    const url = process.env.REACT_APP_API_URL || 'http://localhost';
    const port = process.env.REACT_APP_API_PORT || '3004';

    this.http = axios.create({
      baseURL: `${url}:${port}`,
    });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  getTodoList() {
    return this.http.get('/todos');
  }
}

export default Api.getInstance();
