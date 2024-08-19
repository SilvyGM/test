let x = true
let y = false
let z = true

if (x && z){    
    alert("el valor de  x es " +x +"");
}

if (x || z){    
    alert("el valor de z es " +z +"");
}   

if (!y){    
    alert("el valor de y es " +y +"");
}   
if( z ||y){ 
    alert("el valor de z o y es " +(z || y) +"");
}