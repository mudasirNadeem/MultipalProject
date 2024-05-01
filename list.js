var addcontent = document.getElementById('addcontent');
var index=1;
function listdata() {
    var inputBoxValue = document.getElementById('inputbox').value;
    index++;
    if(inputBoxValue.length > 0){
        addcontent.innerHTML += `
        <div id=${index} class="d-flex my-2">
        <a href="#" class="list-group-item d-flex align-items-center justify-content-between list-group-item-action"  onclick="overline(${index})">${inputBoxValue}
        </a>
        <button class="btn btn-primary border-0 rounded-0" onclick="deleteFun(${index})"><i class="fa fa-trash-o"></i></button>
    </div>`;
    inputBoxValue = document.getElementById('inputbox').value = "";
    }
    else{
        alert("Please Enter a data");
    }
}
function deleteFun(index) {
    var divToRemove = document.getElementById(index); 
    divToRemove.remove(divToRemove); 
}
function overline(input){
    var angarToverline = document.getElementById(input); 
    angarToverline.classList.toggle('text-decoration-line-through'); 
}