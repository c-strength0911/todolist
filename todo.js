const todoInput = document.getElementById("todoInput");
const todoDelBtn = document.querySelectorAll(".todos__del-btn");
const todos = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const insertAddBtn = document.getElementById("insertAddBtn");
const labels = document.querySelectorAll("label");
let listLength;

function inputAction() {
  console.log(todoInput.value);
  listLength = list.length + 1;
  generateTemplate();
}

function generateTemplate() {
  const html = `
    <li>
    <input type="checkbox" id="todo_${listLength}" />
    <label for="todo_${listLength}"><span class="check"></span>${todoInput.value}</label>
    <div class="todos__del-btn"><ion-icon name="trash-outline"></ion-icon></div>
    </li>
    `;
  todos.innerHTML += html;
  //   미완성
}

function checkEvent() {}

function makeLineThroght() {
  list.forEach(function (input) {
    input.addEventListener("click", function () {
      input.setAttribute("class", "throght-line");
    });
  });
}
list.addEventListener("click", makeLineThroght);
todos.addEventListener("click", makeLineThroght);
insertAddBtn.addEventListener("click", inputAction);
