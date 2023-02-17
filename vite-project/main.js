import "./style.css";

document.write(Date());

const DOM = {
  form: document.getElementById("form"),
  task: document.getElementById("add-task"),
  display: document.getElementById("display"),
  breakfast: document.getElementById("breakfast"),
  lunch: document.getElementById("lunch"),
  dinner: document.getElementById("dinner"),
};

DOM.form.addEventListener("submit", function (app) {
  add();
  app.preventDefault();
});

function add() {
  let task = DOM.task.value;
  injectTask(task);
  clearFields();
  removeTask();
}
const clearFields = function () {
  DOM.task.value = "";
};

const injectTask = function (task) {
  DOM.display.insertAdjacentHTML(
    "beforeend",
    `
    <div id = "child">
        <p id="task-text"> ${task} </p>
        <button id="remove"> Remove</button>
    </div>
    `
  );
};

function removeTask() {
  let remove = document.querySelectorAll("#remove");
  remove.forEach((task) => {
    task.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
  });
}

//maybe make a array withh all the fooodddd
// completed tasks
