async function getIngredients(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let dataResponse = await response.json()
    console.log(dataResponse);
    displayIngredients(dataResponse.meals.slice(0, 20));
}

function displayIngredients(x){
    const maxDescriptionLength = 20;
    let cartona = '';
    for(let i=0; i<x.length;i++){
        const description = x[i].strDescription || ''; // Default to an empty string if strDescription is null
        const truncatedDescription = description.split(' ').splice(0, maxDescriptionLength).join(' ');
        cartona+=`
        <div class="col-md-3">
                    <div class="item text-center">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h2 class="">${x[i].strIngredient}</h2>
                        <p>${truncatedDescription}</p>
                    </div>
                </div>
        
        `
    }
    document.getElementById('ingredientData').innerHTML= cartona;
}
getIngredients()
