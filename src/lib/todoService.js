export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then(res => res.json());
}

export const createTodo = (name) => {
  return fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete:false})
  })
    .then(res => res.json());
}


export const updateTodo = (todo) => {
  console.log(todo);
  return fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json());
}

export const destroyTodo = (id) => {
  console.log(`delete id:${id}`);
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    // .then(res => res.json());
}
