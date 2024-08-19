const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile = ('compras.json', 'utf8', (err,data)=>{
    if(err) {   
        console.error (err) 
        return;
    }
    const factura= json.parse(data);
    console.log("la compra en " + (factura.tienda)+"se hizo el dia"+(factura.fecha))
});