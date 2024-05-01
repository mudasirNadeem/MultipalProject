var nav = document.getElementById('nav');
var chenge_IconElement = document.getElementById('chenge-icon');

function theme(){
    document.body.classList.toggle('dark');
    nav.classList.toggle('bg-white');
    chenge_IconElement.classList.toggle("fa-moon");
    chenge_IconElement.classList.toggle("fa-sun");
}