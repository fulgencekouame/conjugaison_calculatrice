function pre() {var vrb=document.getElementById('npt').value;
    var premierGroupe="<p><u>Présent de l'indicatif</u><p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il, elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils, elles XXXX<b>ent</b></p>";
    
    if (vrb.substr(-2)=="er") { 
    document.getElementById('rsp').innerHTML=premierGroupe.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
   
    }
    else alert("Ce verbe n'est pas du 1er groupe !");    
} 

function pas() {var vrb=document.getElementById('npt').value;
    var premierGroupe="<p><u>Passé simple de l'indicatif</u><p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il, elle XXXX<b>a</b></p><p>Nous XXXX<b>ames</b></p><p>Vous XXXX<b>ates</b></p>Ils, elles XXXX<b>èrent</b></p>";
    
    if (vrb.substr(-2)=="er") { 
    document.getElementById('rsp').innerHTML=premierGroupe.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else alert("Ce verbe n'est pas du 1er groupe !"); 

} 

function fut() {var vrb=document.getElementById('npt').value;
    var premierGroupe="<p><u>Future simple de l'indicatif</u><p>Je XXXX<b>erai</b></p><p>Tu XXXX<b>eras</b></p><p>Il, elle XXXX<b>era</b></p><p>Nous XXXX<b>erons</b></p><p>Vous XXXX<b>erez</b></p>Ils, elles XXXX<b>eront</b></p>";
    
    if (vrb.substr(-2)=="er") { 
    document.getElementById('rsp').innerHTML=premierGroupe.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else alert("Ce verbe n'est pas du 1er groupe !"); 

} 

function imp() {var vrb=document.getElementById('npt').value;
    var premierGroupe="<p><u>Imparfait simple de l'indicatif</u><p>Je XXXX<b>ais</b></p><p>Tu XXXX<b>ais</b></p><p>Il, elle XXXX<b>ait</b></p><p>Nous XXXX<b>ions</b></p><p>Vous XXXX<b>iez</b></p>Ils, elles XXXX<b>èront</b></p>";
    
    if (vrb.substr(-2)=="er") { 
    document.getElementById('rsp').innerHTML=premierGroupe.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    }
    else alert("Ce verbe n'est pas du 1er groupe !"); 
    if (verbes.indexOf(vrb)<0) {alert("Verbe inconnu!");return;}

}
