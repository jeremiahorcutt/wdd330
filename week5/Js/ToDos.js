import utilities from './utilities.js';
import ls from './ls.js';

document.querySelector('#add_btn').onclick = newTodo;
document.querySelector('#all').onclick = allView;
document.querySelector('#completed').onclick = completedView;
document.querySelector('#active').onclick = activeView;


window.onload = function() {
  loadTodos();
  };

window.onchange = function(){
  const list = li.getTodoList()
    if(list.length !== 0){
      document.querySelector('.complete').onclick = complete;
    }
};

function loadTodos(){
  const todoList = ls.getTodoList();
  todoList.forEach(todo => {
    const el = createTodoElement(todo)
    addToList(el);
  })
}

function newTodo(){
  const todo = createTodo();
  const todoDiv = createTodoElement(todo);
  addToList(todoDiv);
  ls.saveTodo(todo);
}

function createTodo() {
  const input = document.querySelector('#item');
  const newTodo = { id: Date.now(), content: input.value, completed: false}
  input.value = '';
  return newTodo;
}

function createTodoElement(todo){
  const li = document.createElement('li');
  li.setAttribute('id', todo.id + 'Li')

  const completeBtn = document.createElement('input');
  completeBtn.setAttribute('type', 'button');
  completeBtn.setAttribute('id', todo.id)
  completeBtn.classList.add('complete');

  const todoContent = document.createElement('p');
  todoContent.classList.add('todo-content');
  todoContent.innerText = todo.content;

  const deleteBtn = document.createElement('input');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.classList.add('remove');
  deleteBtn.setAttribute('data-id', todo.id);
  deleteBtn.setAttribute('value', "X");
  deleteBtn.onclick = deleteTodo;

  li.appendChild(completeBtn);
  li.appendChild(todoContent);
  li.appendChild(deleteBtn);

  return li;
}

function addToList(li){
  document.querySelector('#list').appendChild(li);
}

function allView(){
  const list = ls.getTodoList();
  for(let i = 0; i < list.length; i++){
    let listId = list[i].id;
    utilities.showDisplay(listId + "Li");
  }
};

function activeView(){
  const list = ls.getTodoList();
  for(let i = 0; i < list.length; i++){
    if(list[i].completed == false){
      let listId = list[i].id;
      utilities.showDisplay(listId + "Li");
    }
    else{
      let listId = list[i].id;
      utilities.hideDisplay(listId + "Li");
    }
  }
};

function completedView(){
  const list = ls.getTodoList();
  for(let i = 0; i < list.length; i++){
    if(list[i].completed == true){
      let listId = list[i].id;
      utilities.showDisplay(listId + "Li");
    }
    else{
      let listId = list[i].id;
      utilities.hideDisplay(listId + "Li");
    }
  }
};
//Event Handlers
function deleteTodo(e){
  const btn = e.currentTarget;
  ls.deleteTodo(btn.getAttribute('data-id'));
  document.querySelector('#list').innerHTML = '';
  loadTodos();
}

function complete(e){
  const list = ls.getTodoList();
  const btn = e.currentTarget;
  utilities.completeItem(btn.getAttribute('id'));
  let lineId = btn.getAttribute('id');
  for(let i = 0; i < list.length; i++){
    if(list[0].id == lineId){
      list[0].completed = true;
    }
  }
}

