// function show() {
//     var element = document.getElementById("left");
//     element.classList.remove("hidden");
//   }


var formEl = document.querySelector("#input-form");
var inFridgeEl = document.querySelector("#in-fridge");
// Adding to Fridge!
var addToFridge = function(event) {

    event.preventDefault();

    var newFoodInput = document.querySelector("input[name='keyword']").value;

    formEl.reset();

    var listItemEl = document.createElement("li");
    listItemEl.className = "food-item";
    listItemEl.textContent = newFoodInput;
    console.log(newFoodInput);
    inFridgeEl.appendChild(listItemEl);

    



};

formEl.addEventListener("submit", addToFridge);

