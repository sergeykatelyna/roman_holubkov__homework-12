// This script handles controller logic.


function createLi(entry) {
  const todoLi = document.createElement('LI');
  todoLi.innerHTML = `
    <input type="checkbox" class="todoCompletedBtn">
    <span>${entry}</span>
    <button type="button" class="todoEditBtn">🖊️</button>
    <button type="button" class="todoRemoveBtn">&times;</button>
  `;

  return todoLi;
}


function getFilterSelectingHandlerObj(todoForm, todoList) {
  return {
    isActionRelatedToFiltering(e) {
      const isFilterToggled = e.target.matches('.todoList [type="checkbox"]');
      const isDoneCheckboxToggled = e.target.matches('.filtersContainer [type="radio"]');
      const isTodoItemAdded = e.type === 'submit';

      return isFilterToggled || isDoneCheckboxToggled || isTodoItemAdded;
    },

    getSelectedFilter(form) {
      const formElements = new FormData(form);
      return formElements.get('todoFilter').toLowerCase().trim();
    },

    handleEvent(e) {
      if (!this.isActionRelatedToFiltering(e)) {
        return;
      }

      const todoLis = todoList.querySelectorAll('LI');
      const selectedFilter = this.getSelectedFilter(todoForm);

      todoLis.forEach((todoLi) => {
        this[selectedFilter](todoLi);
      });
    },

    findDoneCheckbox(todoLi) {
      return todoLi.querySelector('[type="checkbox"]');
    },

    all(todoLi) {
      todoLi.style.display = '';
    },

    completed(todoLi) {
      if (this.findDoneCheckbox(todoLi).checked) {
        todoLi.style.display = '';
      } else {
        todoLi.style.display = 'none';
      }
    },

    uncompleted(todoLi) {
      if (!this.findDoneCheckbox(todoLi).checked) {
        todoLi.style.display = '';
      } else {
        todoLi.style.display = 'none';
      }
    },
  };
}


function removeLi(removeBtn) {
  const liToRemove = removeBtn.closest('LI');
  liToRemove.remove();
}


function removeAllLis(todoList) {
  todoList.innerHTML = '';
}


function styleEditField(fieldToEdit, isEditable) {
  const backgroundColor = (isEditable) ? '' : '#ffffff';
  const color = (isEditable) ? '' : '#000000';

  fieldToEdit.contentEditable = !isEditable;
  fieldToEdit.style.backgroundColor = backgroundColor;
  fieldToEdit.style.color = color;
}

function editTodoItem(e) {
  const fieldToEdit = e.target.closest('li').querySelector('SPAN');

  styleEditField(fieldToEdit, false);

  fieldToEdit.focus({
    preventScroll: true,
  });

  fieldToEdit.addEventListener('focusout', () => {
    styleEditField(fieldToEdit, true);
  },
  {
    once: true,
  });
}


export {
  createLi,
  getFilterSelectingHandlerObj,
  removeLi,
  removeAllLis,
  editTodoItem,
};
