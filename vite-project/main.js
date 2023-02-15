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
  let breakfast = DOM.breakfast.value;
  let lunch = DOM.lunch.value;
  let dinner = DOM.dinner.value;
  injectTask(task);
  injectMeal(breakfast, lunch, dinner);
  clearFields();
  removeTask();
}
const clearFields = function () {
  DOM.task.value = "";
  DOM.breakfast.value = "";
  DOM.lunch.value = "";
  DOM.dinner.value = "";
};

const injectTask = function (task) {
  if ((DOM.task.value = "")) {
    DOM.display.innerHTML = "";
  } else {
    DOM.display.insertAdjacentHTML(
      "beforeend",
      `
    <div id = "card">
        <p id="task-text"> ${task} </p>
        <button id="remove"> Remove</button>
    </div>
    `
    );
  }
};

const injectMeal = function (breakfast, lunch, dinner) {
  DOM.display.insertAdjacentHTML(
    "beforeend",
    `
    <div id = "card">
        <p id="task-text"> ${breakfast} </p>
        <p id="task-text"> ${lunch} </p>
        <p id="task-text"> ${dinner} </p>
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
