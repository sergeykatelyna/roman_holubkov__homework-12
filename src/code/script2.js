// This script handles filtering todo items.


const todoForm = document.querySelector('.todoForm');
const todoList = document.querySelector('.todoList');


const filterSelectHandlerObj = {
  handleEvent(e) {
    const isFilterToggled = e.target.matches('.todoList [type="checkbox"]');
    const isCompletedCheckboxToggled = e.target.matches('.filtersContainer [type="radio"]');
    const isTodoItemAdded = e.type === 'submit';
    if (!isFilterToggled && !isCompletedCheckboxToggled && !isTodoItemAdded) {
      return;
    }

    this.todoItems = todoList.querySelectorAll('LI');

    const form = new FormData(todoForm);
    const selectedFilterValue = form.get('todoFilter').toLowerCase().trim();

    this[selectedFilterValue](this.todoItems);
  },

  findCompletedBtn(li) {
    return li.querySelector('[type="checkbox"]');
  },

  all() {
    this.todoItems.forEach((todoItem) => {
      const todoItemStyle = todoItem.style;
      todoItemStyle.display = '';
    });
  },

  completed() {
    this.todoItems.forEach((todoItem) => {
      const completedBtn = this.findCompletedBtn(todoItem);
      const todoItemStyle = todoItem.style;
      todoItemStyle.display = '';
      if (!completedBtn.checked) {
        todoItemStyle.display = 'none';
      }
    });
  },

  uncompleted() {
    this.todoItems.forEach((todoItem) => {
      const completedBtn = this.findCompletedBtn(todoItem);
      const todoItemStyle = todoItem.style;
      todoItemStyle.display = '';
      if (completedBtn.checked) {
        todoItemStyle.display = 'none';
      }
    });
  },
};


todoForm.addEventListener('change', filterSelectHandlerObj);
todoForm.addEventListener('submit', filterSelectHandlerObj);
