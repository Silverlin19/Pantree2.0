var foodIdCounter = 0;
var formEl = document.querySelector("#input-form");
var addToFridgeBtn = document.querySelector("#add1");
var inFridgeEl = document.querySelector("#in-fridge");
var insideEl = document.querySelector('#inside');
var foodLocalStorage = [];
// Adding to Fridge!
var addToFridge = function(event) {

    event.preventDefault();

    var newFoodInput = document.querySelector("input[name='keyword']").value;
    newFoodInput = newFoodInput.trim();
    if (newFoodInput.length > 0) {

        formEl.reset();

        var foodDataObj = {
            name: newFoodInput,
            status: "in fridge"
        };
    
        //this will make the item added to the list into a data object
        createItemEl(foodDataObj);
    }
   
};

var createDeleteContainerEl = function() {
    var deleteContainerEl = document.createElement("div");
    deleteContainerEl.className = "delete-action";

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Expired";
    deleteButtonEl.className = "delete-Btn";
    deleteButtonEl.setAttribute("data-food-id", foodIdCounter);
    deleteButtonEl.setAttribute("type", "button");
    deleteContainerEl.appendChild(deleteButtonEl);
    
    return deleteContainerEl;

};

var createItemEl = function(foodDataObj) {

    var listItemEl = document.createElement("li");
    listItemEl.className = "food-item";
   
    listItemEl.setAttribute("data-food-id", foodIdCounter);

    var foodInfoEl = document.createElement("div");
    foodInfoEl.innerHTML = "<li class='food-item'>" + foodDataObj.name + "</li>" ;
    foodInfoEl.setAttribute("data-food-id", foodIdCounter);
    //listItemEl.appendChild(foodInfoEl);
  
    console.dir(listItemEl);

    var deleteButtonEl = createDeleteContainerEl();

    foodInfoEl.appendChild(deleteButtonEl);

    inFridgeEl.appendChild(foodInfoEl);
    foodDataObj.id = foodIdCounter;
    foodLocalStorage.push(foodDataObj);
  
    // increase task counter for next unique id
    foodIdCounter++;
};

var saveToLocalStorage = function() {
   localStorage.setItem("food", newFoodInput, JSON.stringify(food)); 
};

addToFridgeBtn.addEventListener("click", addToFridge);

//havent quite finished this part yet so stuff isnt deleting yet
var deleteFood = function(foodId) {
    console.log(foodId);

};

var deleteButtonHandler = function(event) {
    event.preventDefault()
    console.log("delete button", event.target);
    console.log("parent", event.target.parentElement);

    if (event.target.matches(".delete-Btn")) {
        var foodId = event.target.parentNode;
        var foodId2 = foodId.parentNode;
        foodId2.remove();


    };

};

insideEl.addEventListener("click", deleteButtonHandler);




//below is the JS for fetching from API
var searchEl = document.querySelector("#Rbutton");

const contRecipe = document.getElementById("cont-recipe")


//searches for recipe 
formEl.addEventListener("submit", (e)=>{

    const APP_ID = "4c0248f7"
    const APP_KEY = "82163b1aa0397f62b7d3cbcd21c9579b"

    e.preventDefault()
    let query = ("chicken")
    const app_url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    contRecipe.innerHTML = ''


    //Calls to api 
    $.ajax({
        type:"GET",
        url: app_url,
        //if successful it returns a new div of the recipe
        success:function(data){
            const allRecipe = data.hits
            allRecipe.map((item)=>{

                contRecipe.innerHTML += `
                <a href=${item.recipe.url} target="_blank" rel="noreferrer noopener" >
                <div class='recipe'>
                <div class='title-2 title'>${item.recipe.label}</div>
                
                <img src=${item.recipe.image} alt=""/>
                </div></a>
                `
                console.log(data)
            })
        },
        //if unsuccessful it returns an error to console
        error:function(error){
            console.log(error)
        }
    })

})



