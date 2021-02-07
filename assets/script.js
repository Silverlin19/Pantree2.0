// function show() {
//     var element = document.getElementById("left");
//     element.classList.remove("hidden");
//   }


var foodIdCounter = 0;
var formEl = document.querySelector("#input-form");
var inFridgeEl = document.querySelector("#in-fridge");
// Adding to Fridge!
var addToFridge = function(event) {

    event.preventDefault();

    var newFoodInput = document.querySelector("input[name='keyword']").value;

    formEl.reset();

    var foodDataObj = {
        name: newFoodInput,
    };

    //this will make the item added to the list into a data object
    createItemEl(foodDataObj);
    
};

var createItemEl = function(foodDataObj) {

    var listItemEl = document.createElement("li");
    listItemEl.className = "food-item";
   
    listItemEl.setAttribute("data-food-id", foodIdCounter);

    var foodInfoEl = document.createElement("div");
    foodInfoEl.className = "food-info";
    foodInfoEl.innerHTML = "<li class='food-item'>" + foodDataObj.name + "</li><span class='task-type'>" + "</span>";
    listItemEl.appendChild(foodInfoEl);
  
    console.dir(listItemEl);

    inFridgeEl.appendChild(listItemEl);
  
    // increase task counter for next unique id
    foodIdCounter++;
  };

Var createDelete = function(foodId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-food-id", foodId);

actionContainerEl.appendChild(deleteButtonEl);



};



formEl.addEventListener("submit", addToFridge);




