const addList = document.getElementById("addList");
const todoDelBtn = document.querySelectorAll(".todo_del");
const todos = document.querySelector(".todos");
const list = document.querySelectorAll(".todos li");
const addBtn = document.getElementById("add");
let 
function inputAction() {
  console.log(addList.value);
  //   여기가 안됨
}

function generateTemplate() {
  const html = `
    <li>
    <input type="checkbox" id="todo_${}" />
    <label for="todo_${}"><span class="check"></span>${addList.value}</label>
    <div class="todo_del"><ion-icon name="trash-outline"></ion-icon></div>
    </li>
    `;
  todos.innerHTML += html;
//   미완성
}
addBtn.addEventListener("click", inputAction);
