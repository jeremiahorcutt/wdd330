import utilities from './utilities.js';
import ls from './ls.js';

document.querySelector('#add_btn').onclick = newTodo;
document.querySelector('#all').onclick = allView;
document.querySelector('#completed').onclick = completedView;
document.querySelector('#active').onclick = activeView;

window.onload = function() {
  loadTodos();
  };


function loadTodos(){
  const todoList =ls.getTodoList();
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
  completeBtn.setAttribute('id', todo.id + 'Btn')
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
  const list = loadTodos();
  for(let i = 0; i < list.length; i++){
    utilities.showDisplay(list);
  }
};

function activeView(){
  const list = loadTodos();
  for(let i = 0; i < list.length; i++){
    if(list.completed = false){
      utilities.showDisplay(list);
    }
    else{
      utilities.hideDisplay(list);
    }
  }
};

function completedView(){
  const list = loadTodos();
  for(let i = 0; i < list.length; i++){
    if(list.completed = true){
      utilities.showDisplay(list);
    }
    else{
      utilities.hideDisplay(list);
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

}

