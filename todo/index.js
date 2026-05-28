const input = document.querySelector(".input-container input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", () => {
  const inputv = input.value.trim();
  if (inputv) {
    const li = document.createElement("li");
    li.textContent = inputv;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor = "#dcaaaa";
    delBtn.style.color = "#0c0c0c";
    delBtn.style.border = "none";
    delBtn.style.padding = "5px 10px";
    delBtn.style.borderRadius = "5px";
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", () => {
      todoList.removeChild(li);
    });
    li.appendChild(delBtn);
    todoList.appendChild(li);
    input.value = "";
  }
});
