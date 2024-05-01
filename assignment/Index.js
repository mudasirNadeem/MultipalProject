var imageChenge = 1;
var second = document.getElementById('second');
var one = document.getElementById('one');
var threed = document.getElementById('threed');
var search = document.getElementById('search');
var house = document.getElementById('House');
var download = document.getElementById('download');
function imageChecgeFnc(){
    if(imageChenge == 0){
        one.classList.remove('d-none') 
        threed.classList.add('d-none') 
        second.classList.add('d-none') 
        search.classList.remove('d-none');
        house.classList.add('d-none');
        download.classList.add('d-none');
        imageChenge++;
    }
    else if(imageChenge == 1){
        second.classList.remove('d-none') 
        one.classList.add('d-none') 
        threed.classList.add('d-none') 
        imageChenge++;
        search.classList.add('d-none');
        house.classList.remove('d-none');
    }
    else if(imageChenge == 2){
        second.classList.add('d-none');
        threed.classList.remove('d-none');
        one.classList.add('d-none') 
        house.classList.add('d-none');
        search.classList.add('d-none');
        download.classList.remove('d-none');
        imageChenge = 0;
    }
}