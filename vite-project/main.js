import "./style.css";

/*const DOM = {
  btn: document.getElementsByClassName("btn"),
  //form: document.getElementById("form"),
  categories: document.getElementById("categories"),
};*/
    //meat += `https://www.themealdb.com/api/json/v1/1/filter.php?c=` + value + `${ingredient}`;
    //let meat = link += `${ingredient}`;

//document.getElementById("beef").addEventListener("click", getBeef);
//document.getElementById("chicken").addEventListener("click", getChicken);
//document.getElementById("pork").addEventListener("click", getPork);
//document.getElementById("lamb").addEventListener("click", getLamb);
//document.getElementById("seafood").addEventListener("click", getSeafood);

//const ingredient = ["Beef", "Chicken", "Goat", "Lamb", "Pork", "Seafood", "Vegan"] = await Promise.all

/*const getAll = await Promise.all(
  ingredient.map(async meat => {
    const res = await fetch 
  })
)*/

//remove button

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
      const data = await response.json();
      data.meals.forEach((dish) => {
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          `<div id="card">
          <h1>${dish.strMeal}</h1>
          <img id ="image" src="${dish.strMealThumb}" alt="Image of ${dish.strMeal} ">
          </div>
          <button id="remove">Not a Fan</button>
          `
        );
        dish.strMeal.value = "";
        dish.strMealThumb.value="";
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Sorry, something went wrong.");
    document.getElementById("display").textContent =
      "Sorry, something went wrong.";
  }
}
getBeef();

function removeButtons() {
  let remove = document.querySelectorAll("#remove");
  remove.forEach((card) => {
    card.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
  });
}
removeButtons();

/*
async function getChicken() {
  try {
    document.getElementById("display").innerHTMl = "";
    let chicken = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken"
    const response2 = await fetch(chicken);
    if (response2.status < 200 || response2.status > 299) {
      console.log(response2.status);
      throw error(response2);
    } else {
      const data2 = await response2.json();
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
    const response3 = await fetch(pork);
    if (response3.status < 200 || response3.status > 299) {
      console.log(response3.status);
      throw error(response3);
    } else {
      const data3 = await response3.json();
      document.getElementById("display").innerHTMl = "";
      data3.meals.forEach((dish) => {
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
    const response4 = await fetch(lamb);
    if (response4.status < 200 || response4.status > 299) {
      console.log(response4status);
      throw error(response4);
    } else {
      const data4 = await response4.json();
      document.getElementById("display").innerHTMl = "";
      data4.meals.forEach((dish) => {
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
    const response5 = await fetch(seafood);
    if (response5.status < 200 || response5.status > 299) {
      console.log(response5.status);
      throw error(response5);
    } else {
      const data5 = await response5.json();
      document.getElementById("display").innerHTMl = "";
      data5.meals.forEach((dish) => {
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
}*/



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
