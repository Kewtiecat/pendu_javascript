let canva = document.getElementById('cnv');
let cntxt = canva.getContext('2d');

//script
let screen = document.getElementById("screen"); // calling the screen
let btn = document.getElementsByClassName("btn"); // calling the buttons
let playAgain = document.getElementById("newPart"); // calling play button
let tries = 0; // numbers of tries
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
] // array containing words to be guessed

let secretWord = wordsTab[Math.floor(Math.random()* wordsTab.length)] // randomly select a word to guess
console.log(secretWord);

    for (let i=0; i<secretWord.length; i++) // review the word lenght
    {
        screen.innerHTML += "_"; // replace letters by underscores signs
    }

for (let i=0; i<btn.length; i++) 
{
    btn[i].addEventListener("click", suggestLetter); // launch the suggestLetter function
}


function getIndex(letter) // get the letter's indexes
{
    let indexes = []; // declaring an empty indexes array
    for (i=0; i<=secretWord.length; i++) // reviewing the word's letters
        if (letter === secretWord[i])
        {
            indexes.push(i); // pushing the letter's indexes
        }
    return indexes;
}

function replaceAt(index,letter) // calling the letter 
{
    let s = screen.textContent;
    let tmp = s.substr(0, index) + letter + s.substr(index + 1); // reviewing the word from scratch up to the index, then replace by the letter that has been found, then complete the word
    screen.textContent = tmp;
}

function wellDone() {
    if (screen.textContent === secretWord)
    {
    alert("Vous avez gagné !");
    start()
    }
}

function suggestLetter() {
    let indexes = getIndex(this.value);
    if(indexes.length>0) // If the indexes array is not empty
    {
        console.log(indexes);
        for(let i =0; i<indexes.length;i++)
        {
            replaceAt(indexes[i],this.value)// we call the function to replace the underscore by the letter
            wellDone();
        }
    }
    else
    {
        tries++;
    }
   
    switch(tries) // every mistake we draw a part of the body
    {
        case 1:
            cntxt.beginPath();
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";
            cntxt.moveTo(250, 350); 
            cntxt.lineTo(100, 350);
            cntxt.stroke();
            break;
        case 2:
            cntxt.beginPath();
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(150, 50);
            cntxt.lineTo(150, 350);  
            cntxt.stroke();       
            break;
        case 3:
            cntxt.beginPath();
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(420, 50);
            cntxt.lineTo(146, 50);
            cntxt.stroke();       
            break;
        case 4:
            cntxt.beginPath(); 
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(150, 105);
            cntxt.lineTo(185, 50); 
            cntxt.stroke();       
            break;
        case 5:
            cntxt.beginPath();
            cntxt.lineWidth=7;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 50);
            cntxt.lineTo(417, 105);
            cntxt.stroke();       
            break;
        case 6:
            cntxt.beginPath(); 
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.arc(417, 125, 20, 0, 2*Math.PI); 
            cntxt.stroke();       
            break;
        case 7:
            cntxt.beginPath(); 
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 145);
            cntxt.lineTo(417, 225);
            cntxt.stroke();       
            break;
        case 8:
            cntxt.beginPath(); //potence
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 150);
            cntxt.lineTo(400, 200);
            cntxt.moveTo(417, 150);
            cntxt.lineTo(434, 200); 
            cntxt.stroke();       
            break;
        case 9 :
            cntxt.beginPath();
            cntxt.lineWidth=2;
            cntxt.strokeStyle="#000000";   
            cntxt.moveTo(417, 225);
            cntxt.lineTo(400, 300);
            cntxt.moveTo(417, 225); 
            cntxt.lineTo(434, 300);
            cntxt.stroke();
            alert("Eh bien.. Aucun instinct de survie !");
            start()     
            break;
    }

}

playAgain.addEventListener("click", start) // invite to play again

function start(){
    window.location.reload();
} 