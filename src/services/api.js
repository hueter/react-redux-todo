import mockData from './data.json';

export async function fetchTodos() {
  await setTimeout(() => {
    return mockData;
  }, Math.floor(Math.random() * 2000));
}

export async function fetchTodo(id) {
  await setTimeout(() => {
    return mockData.filter(todo => todo.id === id)[0];
  }, Math.floor(Math.random() * 2000));
}
