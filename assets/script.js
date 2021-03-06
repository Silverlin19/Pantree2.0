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



formEl.addEventListener("submit", addToFridge)

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



