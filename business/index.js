var products=[];
var productJson=localStorage.getItem("products");
if(productJson){
    products=JSON.parse(productJson);
    products.forEach(product => {
        ShowProductToUser(product);
    });
}

var index = 0;
function submitData() {
    index++;
    var productNmeElement = document.getElementById("productName").value;
    var constPriceElement = document.getElementById("costPrice").value;
    var salePriceElement = document.getElementById("salePrice").value;
  
  if (productNmeElement && constPriceElement && salePriceElement !== 0) {
    var newProduct={
        id:index,
      name:productNmeElement,
      costPrice: constPriceElement,
      salePrice:salePriceElement,
    };
    products.push(newProduct);
    ShowProductToUser(newProduct);

     productNmeElement = document.getElementById("productName").value = "";
     constPriceElement = document.getElementById("costPrice").value = "";
     salePriceElement = document.getElementById("salePrice").value = "";

     localStorage.setItem("products",JSON.stringify(products));
  } else {
    alert("Please Enter Your Data");
  }
}

function ShowProductToUser(newProduct) {
    var tbodyElement = document.querySelector("tbody");
    
    let productElement = document.createElement("tr");

    productElement.setAttribute("id", `ProductRow-${newProduct.id}`);
    tbodyElement.appendChild(productElement);

    let nameDetails = document.createElement("td");
    productElement.appendChild(nameDetails);
    nameDetails.setAttribute("id", `ProductName-${newProduct.id}`);
    nameDetails.innerText += `${newProduct.name}`;

    let costPriceDetails = document.createElement("td");
    productElement.appendChild(costPriceDetails);
    costPriceDetails.setAttribute("id", `ConstPrice-${newProduct.id}`);
    costPriceDetails.innerText += `${newProduct.costPrice}`;

    let salePriceDetails = document.createElement("td");
    productElement.appendChild(salePriceDetails);
    salePriceDetails.setAttribute("id", `SalePrice-${newProduct.id}`);
    salePriceDetails.innerText += `${newProduct.salePrice}`;

    let orderButtonElement = document.createElement("td");
    productElement.appendChild(orderButtonElement);
    orderButtonElement.innerHTML += `<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onclick= "order(${newProduct.id})" >
    <i class="fa-brands fa-first-order-alt"></i>
    </button>`;

    let editbtnElement = document.createElement("td");
    productElement.appendChild(editbtnElement);
    editbtnElement.innerHTML += `    <button type="button" onclick = "onEditClick(${newProduct.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class="fa-solid fa-pen"></i>
                        </button>`;


    let deletebtnElement = document.createElement("td");
    productElement.appendChild(deletebtnElement);
    deletebtnElement.innerHTML += `<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#deletedata" onclick= "onDeleteClick(${newProduct.id})" >
    <i class="fa-solid fa-trash-can"></i>
</button>`;


}

function deleteData() {
  var productElement = document.getElementById(`ProductRow-${selectedProduct.id}`);
  productElement.remove(productElement);
  var index=products.indexOf(selectedProduct);
   products.splice(index,1);
   localStorage.setItem("products", JSON.stringify(products));
}
function editProductDetail() {
    var editnameElement = document.getElementById("editproductnameElement").value;
    var editCostPriceElement = document.getElementById("editCostPriceElement").value;
    var editSalePriceElement = document.getElementById("editSalePriceElement").value;

     productNameElement = document.getElementById(`ProductName-${selectedProduct.id}`);
     costPriceElement = document.getElementById(`ConstPrice-${selectedProduct.id}`);
     salePriceElement = document.getElementById(`SalePrice-${selectedProduct.id}`);

     productNameElement.innerText = editnameElement;
     costPriceElement.innerText = editCostPriceElement;
     salePriceElement.innerText = editSalePriceElement;
     
     selectedProduct.name = editnameElement;
     selectedProduct.costPrice = editCostPriceElement;
     selectedProduct.salePrice = editSalePriceElement;

   
     
     localStorage.setItem("products", JSON.stringify(products));

    editnameElement = document.getElementById("editproductnameElement").value = "";
    editCostPriceElement = document.getElementById("editCostPriceElement").value = "";
    editSalePriceElement = document.getElementById("editSalePriceElement").value = "";
}

var productNameElement = undefined;
var    costPriceElement = undefined
var  salePriceElement = undefined
var selectedProduct = undefined;
function onEditClick(id){
     selectedProduct = products.find(product => product.id == id);
    var productNameElement =  document.getElementById(`ProductName-${selectedProduct.id}`).innerText;
    document.getElementById("editproductnameElement").value = productNameElement;
    var productCostPriceElement =  document.getElementById(`ConstPrice-${selectedProduct.id}`).innerText;
    document.getElementById("editCostPriceElement").value = productCostPriceElement;
    var productSalePriceElement =  document.getElementById(`ConstPrice-${selectedProduct.id}`).innerText;
    document.getElementById("editSalePriceElement").value = productSalePriceElement;
}
function onDeleteClick(id){
  selectedProduct = products.find(products => products.id == id);

}
function searchProducts(inputValue) {
  inputValue = inputValue.toUpperCase();
  const tbodyElement = document.getElementById('productTableBody');
  tbodyElement.innerHTML = ''; 
     products.forEach(product => {
         if (product.name.toUpperCase().includes(inputValue)) {
             ShowProductToUser(product);
         }
     });
   
}
var productNameElementOrder = undefined;
var productSalePriceElementOrder =  undefined ;
function order(id) {
  productNameElementOrder = document.getElementById(`ProductName-${id}`).innerText
  document.getElementById("orderProductName").value = productNameElementOrder;
  productSalePriceElementOrder = document.getElementById(`SalePrice-${id}`).innerText;
  document.getElementById("orderSalePrice").value = productSalePriceElementOrder;

  var showProductName = document.getElementById('showProductName');
  showProductName.innerHTML = productNameElementOrder;

  var showSalePrice = document.getElementById('showSalePrice');
  showSalePrice.innerHTML = productSalePriceElementOrder;



}
var orderQuantityShow = undefined;
var salePriceShow =  undefined;
var orderRupesShow  = undefined;

 function showProductList(){
  orderQuantityShow = document.getElementById('orderQuentity').value;
   salePriceShow = document.getElementById('orderSalePrice').value;
   orderRupesShow = orderQuantityShow * salePriceShow;

  var showQuentityRupes = document.getElementById('showQuentityRupes');
  showQuentityRupes.innerHTML = orderRupesShow;

  var showQuentity = document.getElementById('showQuentity');
  showQuentity.innerHTML = orderQuantityShow;
}
function removeValue(){
  purchOrderFun(productNameElementOrder,productSalePriceElementOrder, orderQuantityShow,orderRupesShow);
   document.getElementById('orderQuentity').value = "";
}

var purchaseOrderArry = [];

var purchaseOrdersStorage = localStorage.getItem("purchase");
if (purchaseOrdersStorage) {
  purchaseOrderArry = JSON.parse(purchaseOrdersStorage);
}

function populateTable() {
  var purchaseOrderBody = document.querySelector("#partch-order-table-body");

  purchaseOrderBody.innerHTML = "";
  var idIndex = 0;
  purchaseOrderArry.forEach(function(purchaseOrders) {
    idIndex++;
    var purchaseOrderRow = document.createElement('tr');
    purchaseOrderBody.appendChild(purchaseOrderRow);
    purchaseOrderRow.setAttribute("id", `purchaseorderrow-${idIndex}`);


    var productNamePartchs = document.createElement('td');
    purchaseOrderRow.appendChild(productNamePartchs);
    productNamePartchs.innerHTML = purchaseOrders.productNames;

    var productSalePatchs = document.createElement('td');
    purchaseOrderRow.appendChild(productSalePatchs);
    productSalePatchs.innerHTML = purchaseOrders.productSalepurchase;

    var productQuantityPartchs = document.createElement('td');
    purchaseOrderRow.appendChild(productQuantityPartchs);
    productQuantityPartchs.innerHTML = purchaseOrders.partchsQuantity;

    var productRupesPartchs = document.createElement('td');
    purchaseOrderRow.appendChild(productRupesPartchs);
    productRupesPartchs.innerHTML = purchaseOrders.partchsRupes;


var deletPartchsOrder = document.createElement('td');
purchaseOrderRow.appendChild(deletPartchsOrder);
deletPartchsOrder.innerHTML +=  `<button type="button" class="btn btn-secondary" onclick="removeElementId(${idIndex})"  data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
<i class="fa-solid  fa-trash-can"></i>
</button>`;
  });


}

populateTable();

function purchOrderFun(productName, productSale, orderQuantity, orderRupes) {
  var purchaseOrders = {
    productNames: productName,
    productSalepurchase: productSale,
    partchsQuantity: orderQuantity,
    partchsRupes: orderRupes,
  };

  purchaseOrderArry.push(purchaseOrders);

  localStorage.setItem("purchase", JSON.stringify(purchaseOrderArry));

  populateTable();
}
var purchaseRowId = undefined;
function removeElementId(index){
  purchaseRowId = document.getElementById(`purchaseorderrow-${index}`);
}
function removePurchOrder(purchaseRowId){
  var productRowElement = purchaseRowId;
  productRowElement.remove(productRowElement);
  purchaseOrderArry.splice(purchaseRowId, 1);
  localStorage.setItem("purchase", JSON.stringify(purchaseOrderArry));
}
