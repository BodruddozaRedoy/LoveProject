let div = document.getElementById("container");
let div1 = document.getElementById("ansNo")
let div2 = document.getElementById("ansYes")
let display = 0;

function hideShow1(){
    if(display ==1){
        div.style.display = 'block'
        div1.style.display = 'block'
        
        display = 0;
    }else{
        div.style.display = 'none'
        div2.style.display = 'block'
        display = 1;
    }
}
function hideShow2(){
    if(display ==1){
        div.style.display = 'block'
        div2.style.display = 'block'
        
        display = 0;
    }else{
        div.style.display = 'none'
        div1.style.display = 'block'
        display = 1;
    }
}