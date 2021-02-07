// function show() {
//     var element = document.getElementById("left");
//     element.classList.remove("hidden");
//   }

//API 
const APP_ID = "4c0248f7"
const APP_KEY = "82163b1aa0397f62b7d3cbcd21c9579b"

<<<<<<< Updated upstream
var formEl = document.querySelector("#input-form");
var inFridgeEl = document.querySelector("#in-fridge");
=======
var foodIdCounter = 0;
var formEl = document.querySelector("#Lbutton");
var fridgeEl = document.querySelector("#in-fridge");
>>>>>>> Stashed changes
// Adding to Fridge!
var addToFridge = function(event) {

    event.preventDefault();

    var newFoodInput = document.querySelector("input[name='keyword']").value;

    formEl.reset();

    var listItemEl = document.createElement("li");
<<<<<<< Updated upstream
    listItemEl.className = "food-item";
    listItemEl.textContent = newFoodInput;
    console.log(newFoodInput);
    inFridgeEl.appendChild(listItemEl);
=======
    listItemEl.className = "food-item"; 
   
    listItemEl.setAttribute("data-food-id", foodIdCounter);

    var foodInfoEl = document.createElement("div");
    foodInfoEl.className = "food-info";
    foodInfoEl.innerHTML = "<li class='food-item'>" + foodDataObj.name + "</li><span class='task-type'>" + "</span>";
    listItemEl.appendChild(foodInfoEl);
  
    console.dir(listItemEl);

    fridgeEl.appendChild(listItemEl);
  
    // increase task counter for next unique id
    foodIdCounter++;
  };

var createDelete = function(foodId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
>>>>>>> Stashed changes

    

};

formEl.addEventListener("submit", addToFridge);

<<<<<<< Updated upstream
=======

var searchEl = document.querySelector("#Rbutton");

const contRecipe = document.getElementById("cont-recipe")

searchEl.addEventListener("submit", (e)=>{

    e.preventDefault()
    let query = ('apple')
    const app_url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    contRecipe.innerHTML = ''

    $.ajax({
        type:"GET",
        url: app_url,
        success:function(data){
            const allRecipe = data.hits
            allRecipe.map((item)=>{

                contRecipe.innerHTML += `
                <div class='recipe'>
                <h1>${item.recipe.label}</h1>
                <a href=${item.recipe.url} target="_blank" rel="noreferrer noopener" >Steps</a>
                <img src=${item.recipe.image} alt=""/>
                </div>
                `

                console.log(item.recipe.label)
            })
            //console.log(data.hits[0].recipe.label)
            
        },
        error:function(error){
            console.log(error)
        }
    })

})
>>>>>>> Stashed changes
