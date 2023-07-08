// console.log("yejhhsbdvbkdv")
// /// alert("yooo");

// var b="smothiee"
// console.log(b)
// document.getElementById('sometext').innerHTML='Helloo Saksham!!';

// var reg = prompt("Enter your Registration number = ")
// console.log(reg)
// document.getElementById('num').innerHTML=reg;

// //Numbers in JS

// var num1 =  23.3;
// console.log(3*num1)

// //functions

// function fun(){
//     alert("This is a function!!")
// }
// fun();

// let name = {first: 'Saksham',sagar: 'Sagar'}; //Object
// let random; //undefined
// let nothing = null; //value null

//Challenge 1: Your Age in Days

function ageInDays() {

    var birthyear = prompt('What year you born ..Good Friend??')
    var ageInDays = (2023 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textans = document.createTextNode('You are ' + ageInDays + ' days');
    h1.setAttribute('id', 'anyidtochangeh1');
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);

}

function erasefun() {
    document.getElementById('anyidtochangeh1').remove();
}

//Challenge 2: Genearate Image
function imggenerate() {
    var image = document.createElement('img');
    var flex_box_div = document.getElementById('flex-image-gen');
    image.src = "galaxy1.jpg";
    flex_box_div.appendChild(image);

}
//Challenge 3: Rock,Paper,Scissor

function rpsgame(yourchoice) {

    var choice;

    if (yourchoice.id == 'rock') {
        choice = 0;
    } else
        if (yourchoice.id == 'paper') {
            choice = 1;
        } else {
            choice = 2;
        }
    var syschoice = Math.floor(3 * Math.random());
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    funimage(syschoice, choice);

    var msg = document.createElement('div');
    // var msgdiv = document.createElement('div');
    if (syschoice == 0) {
        if (choice == 0) {
            var text1 = document.createTextNode("Draw");
            // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>Draw</h1>
        } else
            if (choice == 1) {
                var text1 = document.createTextNode("You Won");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Won!!</h1>
            } else {
                var text1 = document.createTextNode("You Loose");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Loose!!</h1>
            }
    } else if (syschoice == 1) {
        if (choice == 1) {
            var text1 = document.createTextNode("Draw");
            // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>Draw</h1>
        } else
            if (choice == 0) {
                var text1 = document.createTextNode("You Loose");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Loose!!</h1>
            } else {
                var text1 = document.createTextNode("You Won");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Won!!</h1>
            }
    } else {
        if (choice == 2) {
            var text1 = document.createTextNode("Draw");
            // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>Draw</h1>
        } else
            if (choice == 1) {
                var text1 = document.createTextNode("You Loose");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Loose!!</h1>
            } else {
                var text1 = document.createTextNode("You Won");
                // msgdiv.innerHTML = <h1 style='color: red; font-weight: bold;'>You Won!!</h1>
            }
    }
    // document.getElementById('flex-box-div').appendChile(msgdiv);
    msg.appendChild(text1);
    document.getElementById('flex-box-div').appendChild(msg);
    // var element = document.getElementById('div');
    // element.innerHTML="<span style='color: red; font-weight: bold;'>Your new text</span>";
}

function funimage(syschoice, choice) {

    var image1 = document.createElement('img');
    var flex_box_img = document.getElementById('flex-box-div');
    var image2 = document.createElement('img');

    if (choice == 0) {
        image1.src = "Rock.png";
    } else if (choice == 1) {
        image1.src = "Paper.png";
    } else if (choice == 2) {
        image1.src = "Scissor.png";
    }

    if (syschoice == 0) {
        image2.src = "Rock.png";
    } else if (syschoice == 1) {
        image2.src = "Paper.png";
    } else if (syschoice == 2) {
        image2.src = "Scissor.png";
    }

    flex_box_img.appendChild(image1);
    flex_box_img.appendChild(image2);
}

//Challenge 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button'); // Making a list of all buttons
console.log(all_buttons);   //Printing all Buttons in console

var copyAllButtons = []
// Copy all button to remember the actual one after changing
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])   //all classlist like , btn and btn-primary ....
    // classList[0]=['btn', 'btn', 'btn', 'btn', 'btn', 'btn', 'btn']
    // classList[1]=['btn-primary', 'btn-danger', 'btn-success', 'btn-primary', 'btn-danger', 'btn-warning', 'btn-success']
}

// console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {

    if (buttonThingy.value == 'red') {
        buttonRed();
    } else if (buttonThingy.value == 'green') {
        buttonGreen();
    } else if (buttonThingy.value == 'reset') {
        buttonReset();
    } else if (buttonThingy.value == 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
        // all_buttons[i].classList[1] = copyAllButtons[i];
    }
}

function buttonRandom() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {

        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);

    }
}

// Challenge 5: Blackjack Game.....

// Here by using querySelector we dont need to use onchange() function, 
// by allowing querySelector we changes in static condition

let blackjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '8'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '8': 8 },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('swish.wav');
const winSound = new Audio('winning.wav');
const lossSound = new Audio('loosing.wav');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {

    if (blackjackGame['isStand'] == false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function showCard(card, activePlayer) {

    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `Assets/${card}.png`;
        cardImage.style.width = '75px';
        cardImage.style.height = '75px';
        cardImage.style.padding = '2px';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}
function blackjackDeal() {
    if (blackjackGame['turnsOver'] == true) {

        blackjackGame['isStand'] = false;
        showResult(ComputeWinner());

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        // console.log(yourImages);
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0
        document.querySelector('#your-blackjack-result').style.color = 'white';

        document.querySelector('#dealer-blackjack-result').textContent = 0
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = "white";
        blackjackGame['turnsOver'] = true;
    }
}
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 6);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
    activePlayer['score'] += blackjackGame['cardsMap'][card];

}
function showScore(activePlayer) {

    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

//Sleep Function so that code runs after 1000 ms..

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//asynchroush function means code is not running lineraly...

async function dealerLogic() {

    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] == true) {


        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjackGame['turnsOver'] = true;
    let Winner = ComputeWinner();
    showResult(Winner);

}

// Compute Winner and Return who just Won!!
// Update the Wins, draws and losses 

function ComputeWinner() {

    let Winner;
    if (YOU['score'] <= 21) {
        //condition: higher score than dealer or when dealer busts but you are a Winner
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['wins']++;
            console.log('YOu Won!!')
            Winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            console.log('You loss!!');
            blackjackGame['losses']++;
            Winner = DEALER;

        } else if (YOU['score'] == DEALER['score']) {
            blackjackGame['draws']++;

            //Condition : when YOU and DEALER busts
        } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
            blackjackDeal['losses']++;
            Winner = DEALER;
        } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
            blackjackGame['draws']++;
        }
        console.log('Winner is ', Winner);
        return Winner;
    }
    return Winner;
}
function showResult(Winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] == true) {
        if (Winner == YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!!';
            messageColor = 'green';
            winSound.play();
        } else if (Winner == DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}