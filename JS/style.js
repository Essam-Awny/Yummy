async function main(){
    let resonse= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data = await resonse.json()
    displayAllMeals(data.meals)
}

function displayAllMeals(allMeals){
    let cartona = ''
    for(let i =0; i<allMeals.length;i++){
        cartona+=`
        <div class="col-md-3  ">
        <div class="inner position-relative overflow-hidden ">
            <img src='${allMeals[i].strMealThumb}' class="w-100 " alt="">
        <div class="layer position-absolute rounded">
            <h3 class="text-black d-flex justify-content-center align-items-center ">${allMeals[i].strMeal}</h3>
        </div>
        </div>
    </div>
        
        `
    }
    document.getElementById('mainImg').innerHTML= cartona;
}
main()



const app = document.querySelector('#app')
const categories = document.querySelector('#categories-button')

const fetchMeals = async () =>{
let res =   await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
res = await res.json()
for(const data of res.meals){
const mealContainer = document.createElement('div')
mealContainer.append(data.strMeal)
app.appendChild(mealContainer)

}
}
const fetchCategories = async () =>{
let res =   await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
res = await res.json()
const mealsParent = document.createElement('div')
for(const data of res.categories){
console.log(data)
const mealContainer = document.createElement('div')
mealContainer.append(data.strCategory)
mealsParent.appendChild(mealContainer)
}
app.replaceWith(mealsParent)
}



// categories.addEventListener('click' , fetchCategories)


// fetchMeals()
// $("button").click(fetchCategories)



// SideBar
let sideBarInnerWidth = $("#innerText").innerWidth()
$("#sideBar").animate({left: -sideBarInnerWidth})

$("#sideBar i").click(function(){
    let sideBarInnerWidth = $("#innerText").innerWidth()
    if($("#sideBar ").css('left')== '0px'){
        $("#sideBar").animate({left: -sideBarInnerWidth})
    }else{
        $("#sideBar").animate({left: '0px'})
    }
})


// Load Page
$("document").ready(function(){ 
   $('.load').slideUp(1000 ,function(){
    
   });
})


// Categories
async function getCat(){
  let respones= await  fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  let responseData= await respones.json();
    displayCategories(responseData.categories)
}
function displayCategories(x){
    let cartona= '';
    for(let i =0; i< x.length; i++){
        cartona += `
        <div class="col-md-3 bigcontainer position-relative">
                <div class="item ">
                    <img src="${x[i].strCategoryThumb}" class="w-100" alt="">
                </div>
                <div class="layer-cat position-absolute ">
                    <h4>${x[i].strCategory}</h4>
                    <p>${x[i].strCategoryDescription}</p>
                </div>
            </div>
        
        `
    }
      document.querySelector("#datashow").innerHTML = cartona;
}


