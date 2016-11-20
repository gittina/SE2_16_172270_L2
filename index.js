function visualizza(){
    var tab2 = document.getElementById("tab2");
    tab2.style.visibility="visible"
    
    var button_prod = document.getElementById("button_products");
    button_prod.style.visibility="visible"    
}


function inserisci(){
    //var cA = Number(document.getElementById("p1").value);
    //var cB = Number(document.getElementById("p2").value);
               
    var prodX = document.getElementById("prodX").value;
    var qX = document.getElementById("qX").value;
        
    console.log("prod inserito "+prodX);
    console.log("quant inserita "+qX);
        
    var table = document.getElementById("tab1");
    
    var list_p = [];
    var list_q = [];
    
    var prodotti = table.children[0].children[0];
    var quant = document.getElementsByClassName("p");
    
    for(var i=0, n=table.rows[0].cells.length; i<n; i++){
        list_p[i]=prodotti.children[i].innerHTML;
        list_q[i]=parseInt(quant[i].value);
        console.log(list_q[i]);
        console.log(list_p[i]);
    }
}