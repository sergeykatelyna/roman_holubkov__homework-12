// This script handles editing todo items.


const todoList = document.querySelector('.todoList');

todoList.addEventListener('click', (e1) => {
  const isTodoEditBtn = e1.target.matches('.todoEditBtn');
  if (!isTodoEditBtn) {
    return;
  }

  const currentSpan = e1.target.previousElementSibling;
  currentSpan.contentEditable = true;
  currentSpan.style.backgroundColor = '#ffffff';
  currentSpan.style.color = '#000000';

  currentSpan.focus({
    preventScroll: true,
  });

  currentSpan.addEventListener('focusout', () => {
    currentSpan.contentEditable = false;
    currentSpan.style.backgroundColor = '';
    currentSpan.style.color = '';
  }, {
    once: true,
  });
});
