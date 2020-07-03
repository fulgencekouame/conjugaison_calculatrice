var premierGroupeRgl="<p><u>Présent de l'indicatif</u></p><p>Je XXXX<b>e</b></p><p>Tu XXXX<b>es</b></p><p>Il, elle XXXX<b>e</b></p><p>Nous XXXX<b>ons</b></p><p>Vous XXXX<b>ez</b></p>Ils, elles XXXX<b>ent</b></p>";
var premierGroupeRg2="<p><u>Passé simple de l'indicatif</u></p><p>Je XXXX<b>ai</b></p><p>Tu XXXX<b>as</b></p><p>Il, elle XXXX<b>a</b></p><p>Nous XXXX<b>ames</b></p><p>Vous XXXX<b>ates</b></p>Ils, elles XXXX<b>èrent</b></p>";
// Même chose pour les autres groupes et sous-groupes
 
function conjugue(){var vrb=document.getElementById('npt').value;
    // test surr la nature du verbe

    // if (verbes.indexOf(vrb)<0) {alert("Verbe inconnu!");return;}

    if (vrb.substr(-2)=="er") {
        document.getElementById('rsp').innerHTML=premierGroupeRgl.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
        
    }
    
    //  else (vrb.substr(-2)=="er") {
    //      document.getElementById('rsp').innerHTML=premierGroupeRg2.replace(/XXXX/g,vrb.substr(0,vrb.length-2));
    //  }
     

    else alert("Je ne sais pas conjuguer ce verbe\n qui n'appartient pas au 1er groupe !");
 
}