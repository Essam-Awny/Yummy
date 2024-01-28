async function getAreaData(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let dataResponse = await response.json();
    displayArea(dataResponse.meals)
}

function displayArea(x){
    let cartona = '';
    for(let i =0;i<x.length;i++){
        cartona +=`
        <div class="col-md-3">
        <div class="item text-center">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <h1>${x[i].strArea}</h1>
        </div>
    </div>
        
        `
    }
    document.getElementById('dataArea').innerHTML = cartona;
}
getAreaData()
