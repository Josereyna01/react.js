import './App.css';
import React from 'react';

const todos = [
  { text:'Cortar Cebolla', completed: false},
  { text:'Tomar curso', completed: false},
  { text:'LLorar con la cebolla', completed: false}
]

function App() {

  return (
<React.Fragment>
{/*<TodoCounter/>*/}
    <h2>Has completado 2 de 3 TODOs</h2>

    {/*<TodoSearch/>*/}
    <imput placeholder="Cebolla" />

    {/*<TodoList>
      {todos.map(todo => (
    <TodoItem />
    ))}
      </TodoList>*/}

    {/*<CreateTodoButton />*/}
    <button>+</button>
</React.Fragment>
  );
}

export default App;
