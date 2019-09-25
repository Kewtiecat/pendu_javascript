let canva = document.getElementById('cnv');
let cntxt = canva.getContext('2d');

//script
let screen = document.getElementById("screen"); //On appelle l'écran
let btn = document.getElementsByClassName("btn"); //On appelle les boutons
let newPart = document.getElementById("newPart"); //Bouton nouvelle partie
let nmbessais = 0;
let wordsTab = [
    "BOUTEILLE",
    "GITHUB",
    "CALEPIN",
    "PALETTE",
    "TEMPLATE",
    "CANETTE",
    "CHOUCROUTE",
    "FOURCHETTE",
    "ORDINATEUR",
]

newPart.addEventListener("click", start) // Au clic, nouvelle partie.

function start(){
    window.location.reload();
}

let secretWord = wordsTab[Math.floor(Math.random()* wordsTab.length)] //Mot à deviner

    for (let i=0; i<secretWord.length; i++) //on parcours la longueur du mot à deviner
    {
        screen.innerHTML += "_"; //On remplace par des _ dans l'écran
    }

for (let i=0; i<btn.length; i++) 
{
    btn[i].addEventListener("click", test); // On cible la position de la lettre dans le tableau. Au clic, lancer le script proposition
}

function getIndex(letter) //récupérer les indexes de la lettre proposée
{
    let indexes = []; // on déclare un tableau d'indexes vide
    for (i=0; i<=secretWord.length; i++) //on parcours les lettres du mot à trouver
    {
        if (letter === secretWord[i]) // si la lettre proposée fait partie des lettres du mot à trouver
        {
            indexes.push(i); // On envoie l'index correspondant
        }
    }
    return indexes; // On retourne les indexs trouvés et leur position dans le mot
}

function replaceAt(index,letter) //On appelle la lettre
{
    let s = screen.textContent;
    let tmp = s.substr(0, index) + letter + s.substr(index + 1); //on appelle la chaîne de 0 à l'index, on remplace par la lettre trouvée, puis on reprendre la chaine jusqu'à la fin
    screen.textContent = tmp;
}

function test() {
    let indexes = getIndex(this.value); // indexes = avoir les indexs selon la lettre proposée actuellement
    if(indexes.length>0) // si le tableau index n'est pas vide
    {
        console.log(indexes);
        for(let i =0; i<indexes.length;i++)
        {
            replaceAt(indexes[i],this.value)//On appelle la fonction pour remplacer en ciblant la position dans le tableau d'index
        }
    }
    else
    {
        console.log("raté");
        nmbessais++;
    }
   
    switch(nmbessais) {
        case 1:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";
            cntxt.moveTo(250, 350); 
            cntxt.lineTo(100, 350); //Base de la potence
            cntxt.stroke();
            break;
        case 2:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(150, 50);
            cntxt.lineTo(150, 350); //Mât de la potence  
            cntxt.stroke();       
            break;
        case 3:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(420, 50);
            cntxt.lineTo(146, 50);
            cntxt.stroke();       
            break;
        case 4:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(150, 105);
            cntxt.lineTo(185, 50); //barre transversale
            cntxt.stroke();       
            break;
        case 5:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 50);
            cntxt.lineTo(417, 105); //corde
            cntxt.stroke();       
            break;
        case 6:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.arc(417, 125, 20, 0, 2*Math.PI); // tête du personnage
            cntxt.stroke();       
            break;
        case 7:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 145);
            cntxt.lineTo(417, 225); //corps du personnage
            cntxt.stroke();       
            break;
        case 8:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 150);
            cntxt.lineTo(400, 200); //bras gauche
            cntxt.moveTo(417, 150);
            cntxt.lineTo(434, 200); //bras droit
            cntxt.stroke();       
            break;
        case 9 :
            cntxt.beginPath(); //potence
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 225);
            cntxt.lineTo(400, 300); //jambe gauche
            cntxt.moveTo(417, 225); //jambe droite
            cntxt.lineTo(434, 300);
            cntxt.stroke();       
            break;
    }

}
