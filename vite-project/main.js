import "./style.css";

/*const DOM = {
  btn: document.getElementsByClassName("btn"),
  //form: document.getElementById("form"),
  categories: document.getElementById("categories"),
};*/

const links = [
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
];

let meat = ``;
links.forEach(getRecipe);
meat += ``;

document.getElementById("beef").addEventListener("click", getRecipe);

async function getRecipe() {
  try {
    //meat += `https://www.themealdb.com/api/json/v1/1/filter.php?c=` + value + `${ingredient}`;
    //let meat = link += `${ingredient}`;

    //let meat = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
    meat += `` + value + ``;
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


//let user = DOM.btn.value;

/*ingredient.forEach(item => {

})*/

/*const links = [
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb",,
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork",,
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan",
];*/

//const ingredient = ["Beef", "Chicken", "Goat", "Lamb", "Pork", "Seafood", "Vegan"]; 
//let link = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
//let meat = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
//ingredient.forEach(getRecipe);
//meat += `${ingredient}`;

/*function createLink() {
  //ingredient.forEach(link += ingredient)};
  ingredient.forEach(getRecipe) {
    let meat = ingredient.forEach(link + ingredient)

  }};
console.log(createLink);*/

//ingredient.forEach(getRecipe);

//ingredient.forEach(async (combined) => {
 // meat = await getRecipe()
//})
/*
ingredient.forEach(() => {
  console.log(link += `${ingredient}`)
});*/

// make an array idk anymore, i dont think form is going to work

//DOM.form.addEventListener("submit", getRecipe);

/*DOM.form.addEventListener("submit", function (e) {
  getRecipe();
  e.preventDefault();
});*/

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
