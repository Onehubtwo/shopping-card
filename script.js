const x=document.getElementsByClassName("plus")
const w=document.getElementsByClassName("minus")
const y=document.getElementsByClassName("quantity")
var total=document.getElementById("total").children[1]
function add(a){
    var r=parseInt(a.innerHTML)+1 ;
    a.innerHTML=r 
    total.innerHTML=parseFloat(a.parentElement.parentElement.children[2].innerHTML)+ parseFloat(total.innerHTML) 
    


    
}
for (var i=0 ; i<x.length ;i++){
     const btnplus =x[i]
     const z=y[i]
     const btnmoins =w[i]
     btnplus.onclick = function() {
     add(z);
}
     btnmoins.onclick = function() {
     minus(z); 
}

     
}
function minus(a){
     var r=parseInt(a.innerHTML) ;
     if (r>0){
     a.innerHTML=r-1
     total.innerHTML=parseFloat(total.innerHTML) - parseFloat(a.parentElement.parentElement.children[2].innerHTML)
     }


}
