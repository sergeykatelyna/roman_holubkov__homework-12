// This script handles removing todo items.


const todoList = document.querySelector('.todoList');
const todoForm = document.querySelector('.todoForm');


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
