import mockData from './data.json';

export function fetchTodos() {
  return new Promise(resolve => {
    return setTimeout(() => {
      return resolve(mockData.data);
    }, Math.floor(Math.random() * (1000 - 300))) + 300;
  });
}

export function fetchTodo(id) {
  return new Promise(resolve => {
    return setTimeout(() => {
      return resolve(mockData.data.filter(todo => todo.id === id)[0]);
    }, Math.floor(Math.random() * (700 - 100))) + 100;
  });
}
