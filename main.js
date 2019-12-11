// import * as Redux from 'redux';
// nodes
let input = document.getElementById('input');
let lista = document.getElementById('lista');
let todos = {
  0:{
    text: 'Ir al cine',
    done: false
  },
  1:{
    text: 'Cenar',
    done: true
  },
  2:{
    text: 'Grabar',
    done: false
  }
};

// functions
function drawTodos(){
  lista.innerHTML = '';
  for (let key in todos) {
    // Crea una etiqueta li
    let li = document.createElement('li');
    // li.id = key;
    // Agrega dentro de la etiqueta los span con la lista de todos
    let classDone = todos[key].done ? 'done' : "";
    li.innerHTML = `
      <span id="${key}" class="${classDone}">${todos[key].text} </span>
      <span data-id="${key}" data-action="delete">X</span>
    `;
    setListeners(li);
    lista.appendChild(li);
  }
}

function setListeners(li){
  li.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-action') === 'delete') {
      let key = e.target.getAttribute('data-id');
      delete todos[key];
      drawTodos();
      return;
    }
    let key = e.target.id;
    todos[key].done = !todos[key].done;
    drawTodos();
  });
}

// listeners
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let text = e.target.value;
    let id = Object.keys(todos).length;
    todos[id] = {text: text, done:false};
    drawTodos();
  }
})

//init
drawTodos();
