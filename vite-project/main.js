import "./style.css";

const DOM = {
  btn: document.getElementById("btn"),
  form: document.getElementById("form"),
  categories: document.getElementById("categories"),
};

let user = DOM.categories.value;
const meat = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${user}`;

//DOM.form.addEventListener("submit", getRecipe);

DOM.form.addEventListener("submit", function (e) {
  getRecipe();
  e.preventDefault();
});

async function getRecipe() {
  try {
    const response = await fetch(meat);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      document.getElementById("display").innerHTMl = "";
      data.meals.forEach((dish) => {
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          `<div id="card">
          <h1>${dish.strMeal}</h1>
          <img id ="image" src="${dish.strMealThumb}" alt="Image of ${dish.strMeal} ">
          </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Sorry, something went wrong.");
    document.getElementById("display").textContent =
      "Sorry, something went wrong.";
  }
}

/*document.write(Date());

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
}*/

//maybe make a array withh all the fooodddd
// completed tasks
