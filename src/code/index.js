import './style.scss';

const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('.todoList');
const todoForm = document.querySelector('.todoForm');


todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!todoInput.value) {
    return;
  }

  const todoLi = document.createElement('LI');
  todoLi.innerHTML = `
    <input type="checkbox" class="todoDone">
    <span>${todoInput.value}</span>
    <button type="button" class="todoEditBtn">🖊️</button>
    <button type="button" class="todoRemoveBtn">&times;</button>
  `;
  todoList.append(todoLi);
  todoInput.value = '';
});


todoList.addEventListener('click', (e) => {
  if (!e.target.matches('.todoRemoveBtn')) {
    return;
  }

  const liToRemove = e.target.closest('.todoList > li');
  liToRemove.remove();
});


todoForm.addEventListener('reset', (e) => {
  e.preventDefault();

  todoList.innerHTML = '';
});
