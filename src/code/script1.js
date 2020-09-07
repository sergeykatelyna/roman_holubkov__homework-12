// This script handles adding new todo items.


const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('.todoList');


todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!todoInput.value) {
    return;
  }

  const todoLi = document.createElement('LI');
  todoLi.innerHTML = `
    <input type="checkbox" class="todoCompletedBtn">
    <span>${todoInput.value}</span>
    <button type="button" class="todoEditBtn">🖊️</button>
    <button type="button" class="todoRemoveBtn">&times;</button>
  `;

  todoList.append(todoLi);

  todoInput.value = '';
});
