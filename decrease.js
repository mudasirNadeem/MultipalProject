var numshow = document.getElementById('numshow');
numshow.innerHTML = "0"; 

function decrease(){
  numshow.innerHTML--;
  if(numshow.innerHTML < 0){
    numshow.classList.add('text-danger')
  }
  else{
    numshow.classList.remove('text-danger')
  }
  if(numshow.innerHTML === 0){
    numshow.classList.add('text-dark')
  }
  else{
    numshow.classList.remove('text-dark')
  }
  if(numshow.innerHTML > 0){
    numshow.classList.add('text-success')
  }

  else{
    numshow.classList.remove('text-success')
  }
}
function increase(){
    numshow.innerHTML++;
    if(numshow.innerHTML < 0){
        numshow.classList.add('text-danger')
      }
      else{
        numshow.classList.remove('text-danger')
      }
      if(numshow.innerHTML === 0){
        numshow.classList.add('text-dark')
      }
      else{
        numshow.classList.remove('text-dark')
      }
      if(numshow.innerHTML > 0){
        numshow.classList.add('text-success')
      }
  
      else{
        numshow.classList.remove('text-success')
      }
}
function reset(){
        numshow.innerHTML = 0;
        if(numshow.innerHTML < 0){
            numshow.classList.add('text-danger')
          }
          else{
            numshow.classList.remove('text-danger')
          }
          if(numshow.innerHTML === 0){
            numshow.classList.add('text-dark')
          }
          else{
            numshow.classList.remove('text-dark')
          }
          if(numshow.innerHTML > 0){
            numshow.classList.add('text-success')
          }
      
          else{
            numshow.classList.remove('text-success')
          }
}