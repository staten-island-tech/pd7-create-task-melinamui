import "./style.css";

/*const DOM = {
  btn: document.getElementsByClassName("btn"),
  //form: document.getElementById("form"),
  categories: document.getElementById("categories"),
};*/
    //meat += `https://www.themealdb.com/api/json/v1/1/filter.php?c=` + value + `${ingredient}`;
    //let meat = link += `${ingredient}`;

document.getElementById("beef").addEventListener("click", getBeef);
document.getElementById("chicken").addEventListener("click", getChicken);
document.getElementById("pork").addEventListener("click", getPork);
document.getElementById("lamb").addEventListener("click", getLamb);
document.getElementById("seafood").addEventListener("click", getSeafood);

//const ingredient = ["Beef", "Chicken", "Goat", "Lamb", "Pork", "Seafood", "Vegan"] = await Promise.all

/*const getAll = await Promise.all(
  ingredient.map(async meat => {
    const res = await fetch 
  })
)*/

async function getBeef() {
  try {
    /*const getAll = await Promise.all(
      ingredient.map(async meat => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meat}`
        ) 
      }))*/
    document.getElementById("display").innerHTMl = "";
    let beef = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
    const response = await fetch(beef);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data1 = await response.json();
      data1.meals.forEach((dish) => {
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

async function getChicken() {
  try {
    document.getElementById("display").innerHTMl = "";
    let chicken = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken"
    const response = await fetch(chicken);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data2 = await response.json();
      document.getElementById("display").innerHTMl = "";
      data2.meals.forEach((dish) => {
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

async function getPork() {
  try {
    let pork = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork"
    const response = await fetch(pork);
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

async function getLamb() {
  try {
    let lamb = "https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb"
    const response = await fetch(lamb);
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

async function getSeafood() {
  try {
    let seafood = "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood"
    const response = await fetch(seafood);
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
