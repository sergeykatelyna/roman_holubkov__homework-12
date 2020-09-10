import {
  createLi,
  getFilterSelectingHandlerObj,
  removeLi,
  removeAllLis,
  editTodoItem,
} from './todoUtils';
import './style.scss';


function createFormTag(formId) {
  const todoForm = document.createElement('FORM');
  todoForm.setAttribute('action', '/');
  todoForm.setAttribute('method', 'GET');
  todoForm.setAttribute('id', formId);
  todoForm.classList.add('todoForm');

  return todoForm;
}

function createMainLabel(formId) {
  const mainLabel = document.createElement('LABEL');
  mainLabel.setAttribute('for', `${formId}__todoInput`);
  mainLabel.textContent = 'Todo items:';

  return mainLabel;
}

function createInputSection(formId) {
  const inputSection = document.createElement('DIV');
  inputSection.classList.add('inputElsContainer');

  inputSection.innerHTML = `
    <input type="text" placeholder="Enter a todo item" id="${formId}__todoInput">
    <button type="submit">Add</button>
  `;

  return inputSection;
}

function createFilterSection(formId) {
  const filterSection = document.createElement('FIELDSET');
  filterSection.classList.add('filtersContainer');

  filterSection.innerHTML = `
    <legend>Todo filters:</legend>
    <input type="radio" name="todoFilter" id="${formId}__filter1" value="all" checked>
    <label for="${formId}__filter1">All</label>
    <input type="radio" name="todoFilter" id="${formId}__filter2" value="completed">
    <label for="${formId}__filter2">Completed</label>
    <input type="radio" name="todoFilter" id="${formId}__filter3" value="uncompleted">
    <label for="${formId}__filter3">Uncompleted</label>
  `;

  return filterSection;
}

function createTodoListSection() {
  const todoList = document.createElement('OL');
  todoList.classList.add('todoList');

  return todoList;
}

function createResetAllSection() {
  const resetAllSection = document.createElement('DIV');
  resetAllSection.classList.add('ResetAllContainer');

  resetAllSection.innerHTML = `
    <button type="reset">Clear All</button>
  `;

  return resetAllSection;
}

function createTodoForm(formId) {
  const todoForm = createFormTag(formId);
  const mainLabel = createMainLabel(formId);
  const inputSection = createInputSection(formId);
  const filterSection = createFilterSection(formId);
  const todoListSection = createTodoListSection();
  const resetAllSection = createResetAllSection();

  todoForm.append(mainLabel, inputSection, filterSection, todoListSection, resetAllSection);

  return todoForm;
}

function addTodoEventHandlers(todoForm, todoInput, todoList) {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!todoInput.value) {
      return;
    }
    todoList.append(createLi(todoInput.value));
    todoInput.value = '';
  });


  todoForm.addEventListener('change', getFilterSelectingHandlerObj(todoForm, todoList));
  todoForm.addEventListener('submit', getFilterSelectingHandlerObj(todoForm, todoList));


  todoList.addEventListener('click', (e) => {
    if (!e.target.matches('.todoRemoveBtn')) {
      return;
    }
    removeLi(e.target);
  });


  todoForm.addEventListener('reset', (e) => {
    e.preventDefault();
    removeAllLis(todoList);
  });


  todoList.addEventListener('click', (e) => {
    if (!e.target.matches('.todoEditBtn')) {
      return;
    }
    editTodoItem(e);
  });
}

function createTodoApp(formId) {
  const todoForm = createTodoForm(formId);
  const todoInput = todoForm.querySelector(`#${formId}__todoInput`);
  const todoList = todoForm.querySelector('.todoList');

  addTodoEventHandlers(todoForm, todoInput, todoList);

  return todoForm;
}

function addTodoAddToPage(containerTag, todoApp) {
  containerTag.append(todoApp);
}


addTodoAddToPage(document.body, createTodoApp('todoApp1'));
addTodoAddToPage(document.body, createTodoApp('todoApp2'));
