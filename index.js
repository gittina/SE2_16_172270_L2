function visualizza(){
    var tab2 = document.getElementById("tab2");
    tab2.style.visibility="visible"
    
    var button_prod = document.getElementById("button_products");
    button_prod.style.visibility="visible"    
}


function inserisci(){
    var cA = Number(document.getElementById("p1").value);
    var cB = Number(document.getElementById("p2").value);
    
    var prodA = document.getElementById("A").value;
    
    var ris = cA+cB;
    
    console.log(typeof(prodA));
    
    var prodX = document.getElementById("prodX").value;
    var qX = document.getElementById("qX").value;
    
    document.getElementById("p1").value = ris;
    
    console.log(prodX);
    console.log(qX);
    
    
    
    
}