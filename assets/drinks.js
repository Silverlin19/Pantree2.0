// function show() {
//     var element = document.getElementById("left");
//     element.classList.remove("hidden");
//   }


var foodIdCounter = 0;
var drinkEl = document.querySelector("#add1");
var queryEl = document.querySelector("#Rbutton");
var inFridgeEl = document.querySelector("#in-fridge");
var query = "lemon"
// Adding to Fridge!
var addToFridge = function(event) {

    event.preventDefault();

    var newFoodInput = document.querySelector("input[name='keyword']").value;

    drinkEl.reset();

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
    foodInfoEl.innerHTML = "<li class='food-item'><button id='query'>" + foodDataObj.name + "</button></li><span class='task-type'></span>";
    listItemEl.appendChild(foodInfoEl);
  
    console.dir(listItemEl);

    inFridgeEl.appendChild(listItemEl);
  
    // increase task counter for next unique id
    foodIdCounter++;
  };

var createDelete = function(foodId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create delete button
var deleteButtonEl = document.createElement("button");
deleteButtonEl.textContent = "Delete";
deleteButtonEl.className = "btn delete-btn";
deleteButtonEl.setAttribute("data-food-id", foodId);

actionContainerEl.appendChild(deleteButtonEl);



};

var query = "lemon"

drinkEl.addEventListener("submit", addToFridge)

const contDrink = document.getElementById("cont-drink")


//searches for liquor recipe 
queryEl.addEventListener("click", (e)=>{

    const APP_ID = "4c0248f7"
    const APP_KEY = "82163b1aa0397f62b7d3cbcd21c9579b"
    e.preventDefault()
    const app_url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
    contDrink.innerHTML = ''


    //Calls to api 
    $.ajax({
        type:"GET",
        url: app_url,
        //if successful it returns a new div of the recipe
        success:function(data){
            const allRecipe = data.drinks
            allRecipe.map((item)=>{

                contDrink.innerHTML += `
                <a href='''' target="_blank" rel="noreferrer noopener" >
                <div class='drink'>
                <div class='drink-name title'>${item.strDrink}</div>
                <img src=${item.strDrinkThumb} alt=""/>
                </div></a>
                `
            })

            console.log(data.drinks)

        },
        //if unsuccessful it returns an error to console
        error:function(error){
            console.log(error)
        }
    })

})