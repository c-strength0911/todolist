const addList = document.getElementById("addList");
const todoDelBtn = document.querySelectorAll(".todo_del");
const todos = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const addBtn = document.getElementById("add");
const todoLabel = document.querySelectorAll("label");
let listLength;
let addTemplate;

function inputAction() {
  addTemplate = addList.value;
  console.log(addTemplate);
  generateTemplate(addTemplate);
  //   여기가 안됨
}

function generateTemplate(curAdd) {
  listLength = todos.length;
  const html = `
    <li>
    <input type="checkbox" id="todo_${listLength}" />
    <label for="todo_${listLength}"><span class="check"></span>${curAdd}</label>
    <div class="todo_del"><ion-icon name="trash-outline"></ion-icon></div>
    </li>
    `;
  todos.innerHTML += html;
}

// function makeLineThroght() {
//   todoLabel.setAttribute("class", "throght-line");
// }
todoLabel.forEach(function (input) {
  input.addEventListener("click", function (e) {
    input.setAttribute("class", "throght-line");
  });
});

addBtn.addEventListener("click", inputAction);
