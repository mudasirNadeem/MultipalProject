function sum() {
    var foot = document.getElementById('foot').value * 12;
    var inch = document.getElementById('inch').value / 12;
    if (foot > 0) {
        document.getElementById('inch').value = foot; 
    }
    if (inch > 0) {
        document.getElementById('foot').value = inch; 
    }
}
function validate(){
    var foot = document.getElementById('foot').value;
    var inch = document.getElementById('inch').value;
    var btn = document.getElementById('checkdesable');
   if(foot || inch){
     btn.disabled = false;
   }
   else{
    btn.disabled = true;
    document.getElementById('inch').value = ""; 
    document.getElementById('foot').value = ""; 
   }
}