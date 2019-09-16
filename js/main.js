let canva = document.getElementById('cnv');
let cntxt = canva.getContext('2d');

cntxt.beginPath(); //potence
cntxt.lineWidth=7;
cntxt.strokeStyle="#000000";
cntxt.moveTo(250, 350); 
cntxt.lineTo(100, 350); //Base de la potence
cntxt.moveTo(150, 50);
cntxt.lineTo(150, 350); //Mât de la potence
cntxt.moveTo(420, 50);
cntxt.lineTo(146,  50); //tête de la potence
cntxt.moveTo(150, 105);
cntxt.lineTo(185, 50); //barre transversale
cntxt.stroke();

cntxt.beginPath(); //corde
cntxt.lineWidth=5;
cntxt.strokeStyle="#000000";
cntxt.moveTo(417, 50);
cntxt.lineTo(417, 105);
cntxt.stroke();

cntxt.beginPath(); //Personnage
cntxt.lineWidth=2;
cntxt.strokeStyle="#000000";
cntxt.arc(417, 125, 20, 0, 2*Math.PI); // tête du personnage
cntxt.stroke();
cntxt.strokeStyle="#000000";
cntxt.moveTo(417, 145);
cntxt.lineTo(417, 225); //corps du personnage
cntxt.stroke();
cntxt.moveTo(417, 150);
cntxt.lineTo(400, 200); //bras gauche
cntxt.stroke();
cntxt.moveTo(417, 150);
cntxt.lineTo(434, 200); //bras droit
cntxt.stroke();
cntxt.moveTo(417, 225);
cntxt.lineTo(400, 300); //jambe gauche
cntxt.stroke();
cntxt.moveTo(417, 225); //jambe droite
cntxt.lineTo(434, 300);
cntxt.stroke();

//script
let screen = document.getElementById("screen"); //On appelle l'écran
let btn = document.getElementsByClassName("btn"); //On appelle les boutons
let nbtries; //nombre d'essais

for (let i=0; i<btn.length; i++) 
{
    btn[i].addEventListener("click", test); // On cible la position de la lettre dans le tableau. Au clic, lancer le script proposition
}

let wordsTab = [
    "BIENVENUE",
    "COUCOU",
    "BEUH",
    "MEH"
]

let secretWord = wordsTab[Math.floor(Math.random()* wordsTab.length)] //Mot à deviner

    for (let i=0; i<secretWord.length; i++) //on parcours la longueur du mot à deviner
    {
        screen.innerHTML += "_ "; //On remplace par des _ dans l'écran
    }

function test()
{
    if (this.value === 0 )
    {
        console.log("Bravo!")
    }
    else 
    {
        console.log("Dommage")
    }
}

