
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var serchInput=document.getElementById("serchInput");
var productIndex = document.getElementById("ProductIndex");


let productContainer;

if (localStorage.getItem("myProduct") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("myProduct"));
    displayProduct();
}


function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCategory.value,
        desc: productDescription.value
    }
    
    productContainer.push(product);
    localStorage.setItem("myProduct", JSON.stringify(productContainer));
    displayProduct();
    clearForm();
    


}


function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productDescription.value = "";
    productCategory.value = "";
}

function displayProduct() {

    cartoona = '';

    for (let i = 0; i < productContainer.length; i++) {
        cartoona += `<tr>

        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].cat}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="showProduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-info">Delete</button></td>

    </tr>`;
    }

    document.getElementById("productinfo").innerHTML = cartoona;

}

function  deleteProduct(deleteIndex) {

    productContainer.splice(deleteIndex,1);
    localStorage.setItem("myProduct" , JSON.stringify(productContainer));
    displayProduct();
    
}


function searchProduct(term) {

    

    cartoona='';
    for(var i=0;i<productContainer.length;i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term)){

        
        cartoona += `<tr>

        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].cat}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onclick="showProduct(${i})" class="btn btn-warning">Update</button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-info">Delete</button></td>

    </tr>`;
        }
      
    }

    document.getElementById("productinfo").innerHTML=cartoona;
    
}

function showProduct(term) {

    productName.value =productContainer[term].name;
    productPrice.value=productContainer[term].price;
    productDescription.value=productContainer[term].desc;
    productCategory.value=productContainer[term].cat;
    productIndex.value = term;

}

function updateProduct(i) {
    // update product  

    var product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCategory.value,
        desc: productDescription.value
    }
    productContainer.splice(i.value,1, product);
    localStorage.setItem("myProducts", JSON.stringify(productContainer));
    displayProduct();
    clearForm();
    console.log(productContainer);
};

