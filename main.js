// import * as Redux from 'redux';
// nodes
let input = document.getElementById('input');
let lista = document.getElementById('lista');
let todos = {};

// function
function drawTodos(){
  lista.innerHTML = '';
  for (let key in todos) {
    // Crea una etiqueta li
    let li = document.createElement('li');
    li.id = key;
    // Agrega dentro de la etiqueta los span con la lista de todos
    li.innerHTML = `
      <span>${todos[key]} </span>
      <span id="${key}">X</span>
    `;
    lista.appendChild(li);
  }
}

// listeners
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let text = e.target.value;
    let id = Object.keys(todos).length;
    todos[id] = text;
    drawTodos();
  }
})
