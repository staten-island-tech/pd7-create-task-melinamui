import "./style.css";

//Restart Button
document.getElementById("reload").addEventListener("click", function () {
  location.reload();
});

//Theme
document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("normal")) {
    document.body.classList.add("cow");
    document.body.classList.remove("normal");
  } else {
    document.body.classList.add("normal");
    document.body.classList.remove("cow");
  }
});

//Using an API to get Beef Dishes
async function getBeef() {
  try {
    document.getElementById("display").innerHTMl = "";
    let beef = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
    const response = await fetch(beef);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();
      data.meals.forEach((dish) => {
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <h1>${dish.strMeal}</h1>
          <img id ="image" src="${dish.strMealThumb}" alt="Image of ${dish.strMeal} ">
          <button class="button" id="remove">Not a Fan</button>
          </div>
          `
        );
      });
      function removeButtons() {
        let remove = document.querySelectorAll("#remove");
        remove.forEach((card) => {
          card.addEventListener("click", function (event) {
            event.target.parentElement.remove();
          });
        });
      }
      removeButtons();
    }
  } catch (error) {
    console.log(error);
    console.log("Sorry, something went wrong.");
    document.getElementById("display").textContent =
      "Sorry, something went wrong.";
  }
}
getBeef();
