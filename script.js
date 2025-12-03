console.log("Inizio controllo eseuzione")
let d = new Date();
console.log(d)
document.getElementById('saluto').value = d;
let ar[3];
function elabora(){
    let a =document.getElementById("inNumber").value;
    console.log(a)
    alert (a)
    let testo =document.getElementById("inText").value;
    console.log(testo)
    
}
function annulla(){
    document.getElementById("inNumber").value = " ";
    document.getElementById("inText").value = " ";
}
let a = parseInt(document.getElementById("inNumber").value);
if(a > 255 || a < 0){
    console.log(a)
    document.getElementById('error').value = "Il numero non è valido";
}
else{
    document.getElementById('outText').value = a;
    colori.push(numero);
    console.log(colori);
}

