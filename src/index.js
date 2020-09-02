import "./style.scss";

const todoInput = document.querySelector("#todoInput");
const todoAddBtn = document.querySelector("#todoAddBtn");
const todoList = document.querySelector(".todoList");
const todoClearBtn = document.querySelector("#todoClearBtn");

function addtodoLi() {
  const todoLi = document.createElement("LI");
  todoLi.innerHTML = `
  <span>${todoInput.value}</span>
  <button type="button" class="todoRemoveBtn">&times;</button>
  `;
  todoList.append(todoLi);
  todoInput.value = "";
}

todoAddBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!todoInput.value) {
    return;
  }

  addtodoLi();
});

todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();

    if (!todoInput.value) {
      return;
    }

    addtodoLi();
  }
});

todoList.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.matches(".todoRemoveBtn")) {
    return;
  }

  const liToRemove = e.target.closest(".todoList > li");
  liToRemove.remove();
});

todoClearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const allTodoLi = document.querySelectorAll(".todoList > li");
  allTodoLi.forEach((li) => li.remove());
  todoInput.value = "";
});
