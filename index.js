function visualizza(){
    var tab2 = document.getElementById("tab2");
    tab2.style.visibility="visible"
    
    var button_prod = document.getElementById("button_products");
    button_prod.style.visibility="visible"    
}


function inserisci(){
    
    var prodX = document.getElementById("prodX").value;
    var qX = parseInt(document.getElementById("qX").value);
        
    console.log("prod inserito "+prodX);
    console.log(qX);
        
    var table = document.getElementById("tab1");
    
    var list_p = [];
    var list_q = [];
    
    //presi in input tutti i dati sulla pag
    var prodotti = table.children[0].children[0];
    var quant = document.getElementsByClassName("p");
    var len=table.rows[0].cells.length;
    
    
    
    for(var i=0, n=len; i<n; i++){
        list_p[i]=prodotti.children[i].innerHTML;
        list_q[i]=parseInt(quant[i].value);
        console.log(quant[i]);
        console.log(list_q[i]);
        console.log(list_p[i]);
    }
    
    var trovato=false;
    var j=0;
    
    while (j<len && !trovato){
        if (list_p[j]==prodX){
            trovato=true;
        } else {
            j++;
        }
    }
    
    if (trovato){
        list_q[j]=list_q[j]+qX;
        console.log("qX");
        console.log(qX);
        console.log("risultato");
        console.log(list_q[j]);
        
        var js=String(j);
        
        document.getElementById("p"+js).value=list_q[j];  
    } else {
       
        var row1 = document.getElementById("r1");
        var row2 = document.getElementById("r2");
        var c1 = row1.insertCell(len);
        c1.setAttribute("class", "col");
        var c2 = row2.insertCell(len);
        c2.setAttribute("class", "p");
        c2.setAttribute("id", "p"+len);
        console.log("js");
        console.log(len);
        c1.innerHTML=prodX;
       // c2.innerHTML=<input readonly="readonly" value="4" name="p1" class="p" id="p1" />;       
        
    }
    
    
    
}