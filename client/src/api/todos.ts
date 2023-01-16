import axiosInstance from './axiosInstance';
import { TodoForm } from '../types/todos';

const todos = {
  getTodos: () => {
    return axiosInstance.get('/todos');
  },
  getTodoById: (id: string) => {
    return axiosInstance.get(`/todos/${id}`);
  },
  createTodo: (data: TodoForm) => {
    return axiosInstance.post('/todos', data);
  },
  updateTodo: (id: string, data: TodoForm) => {
    return axiosInstance.put(`/todos/${id}`, data);
  },
  deleteTodo: (id: string) => {
    return axiosInstance.delete(`todos/${id}`);
  },
};
export default todos;