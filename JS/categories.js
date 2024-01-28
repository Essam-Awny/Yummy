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
          <div id='${x[i].strCategory}' class="col-md-3 bigcontainer position-relative cat">
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
        
        $('.cat').click(async function(){
            let catName = $(this).attr('id')
            console.log(catName);
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
            let data = await res.json()
            console.log(data);
            displaySingleCat(data.meals)
        })
  }
  getCat()

  function displaySingleCat(data){
    let cartona= '';
      for(let i =0; i< data.length; i++){
          cartona += `
          <div id='${data[i].idMeal}' class="col-md-3  meal my-2">
                  <div class='bigcontainer position-relative'>
                  <div class="item ">
                  <img src="${data[i].strMealThumb}" class="w-100" alt="">
              </div>
              <div class="layer-cat position-absolute ">
                  <h4>${data[i].strMeal}</h4>
              </div>                  
                  </div>
              </div>
          
          `
      }
      document.querySelector("#datashow").innerHTML = cartona;

      $('.meal').click(async function(){
        let id = $(this).attr('id')
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        let data = await res.json()
        console.log(data.meals[0]);
        displayDetails(data.meals[0])
    })

  }


 function displayDetails(data){
    let cartona = `
    <div class="container">
        <div class="row py-5 ">
        <div class="col-md-6 position-relative">
        <img src=${data.strMealThumb} class="w-75" alt="">
        <h4>${data.strMeal}</h4>
        <i id='close'  class='fa-solid fa-x fa-xl end-0'></i>
            </div>
            <div class="col-md-6">
                <h1>test</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, hic!</p>
                <h1>area</h1>
                <h1>category</h1>
                <h2>recipes:</h2>
                <div class="badges">
                    <div class="badge bg-info">essam</div>
                    <div class="badge bg-info">essam</div>
                    <div class="badge bg-info">essam</div>
                    <div class="badge bg-info">essam</div>
                    <div class="badge bg-info">essam</div>
                    <div class="badge bg-info">essam</div>
                </div>
                <h2>tags:</h2>
                <div class="badges">
                    <div class="badge bg-danger">essam</div>
                    <div class="badge bg-danger">essam</div>
                </div>
                <div class="badges">
                    <div class="badge bg-danger"><a href="">essam</a></div>
                    <div class="badge bg-success"><a href="">essam</a></div>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector("#datashow").innerHTML = cartona;


  }

$('#close').click(function(){
    console.log('ayyy');
  getCat()
})


  