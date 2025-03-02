var words=['stick', 'blaze', 'craft', 'dance', 'elbow', 'flare', 'grasp', 'hinge', 
    'belts', 'break', 'latch', 'birth', 'noble', 'opals', 'plumb', 'quake', 'rinse', 
    'slink', 'tasky', 'urges', 'waste', 'wacky', 'yatch', 'beach', 'caper', 'ducky', 
    'reply', 'frost', 'blast', 'heist', 'ivory', 'jumpy', 'brown', 'lemon', 'mazes', 
    'nerdy', 'batch', 'pouch', 'rocks', 'snowy', 'ticks', 'windy', 'vibes', 'place', 'vault', 
    'white', 'black', 'quest', 'squid', 'blown'];
var word;
var health=5
var score=0;
var chosenLetter;

function preGame(){
    wordgen();
    updateDisplay();
}

function wordgen(){
    let randomNumber = Math.floor(Math.random() * words.length);
    word = words[randomNumber];
}

function checkLetter(){
    if(score === 5 || health === 0){
        return;
    }
    promptValidator();
    letterChecker();
}

function updateDisplay(){
    document.getElementById("lives").innerText = health;
    document.getElementById("score").innerText = score;
    healthChecker();
    if(score == 5){
        winGame();
        return;
    }
}

function letterChecker(){
    if(document.getElementById('s-0').innerHTML === chosenLetter ||
        document.getElementById('s-1').innerHTML === chosenLetter ||
        document.getElementById('s-2').innerHTML === chosenLetter ||
        document.getElementById('s-3').innerHTML === chosenLetter ||
        document.getElementById('s-4').innerHTML === chosenLetter) {
        alert("You already guessed that letter! Try a different one(U TAKE 1 DAMAGE!).");
        health--;
        updateDisplay();
        return;
    }
    if(!chosenLetter || chosenLetter.length !== 1) {
        alert("Invalid input! Please enter a single letter.");
        return;
    }else if(chosenLetter === word[0] || chosenLetter === word[1] || 
        chosenLetter === word[2] || chosenLetter === word[3] || 
        chosenLetter === word[4]){
        if(chosenLetter === word[0]){
            document.getElementById('s-0').innerHTML = chosenLetter;
            score++;
            updateDisplay();
        }else if(chosenLetter === word[1]){
            document.getElementById('s-1').innerHTML = chosenLetter;
            score++;
            updateDisplay();
        }else if(chosenLetter === word[2]){
            document.getElementById('s-2').innerHTML = chosenLetter;
            score++;
            updateDisplay();
        }else if(chosenLetter === word[3]){
            document.getElementById('s-3').innerHTML = chosenLetter;
            score++;
            updateDisplay();
        }else if(chosenLetter === word[4]){
            document.getElementById('s-4').innerHTML = chosenLetter;
            score++;
            updateDisplay();
        }
    }else{
        alert("thats wrong! (U TAKE 1 DAMAGE!)")
        health--;
        updateDisplay();
    }
}

function healthChecker(){
    if(health === 4){
        document.getElementById("head").style.display = "block";
    }else if(health === 3){
        document.getElementById("arm-1").style.display = "block";
    }else if(health === 2){
        document.getElementById("arm-2").style.display = "block";
    }else if(health === 1){
        document.getElementById("torso").style.display = "block";
    }else if(health === 0){
        document.getElementById("foot-1").style.display = "block";
        document.getElementById("foot-2").style.display = "block";
        alert('!Game Over! The word was:' + word);
        let restartGame = confirm("Would you like to heal back to full health?");
        if(restartGame){
            location.reload();
        }else{
            alert("Alright then...");
        }
    }
}

function promptValidator(){
    if (health == 0){
        alert("U have 0 health! (Reload the page to heal back to full!)");
        return;
    }else{
        chosenLetter=prompt("Give me a letter").toLowerCase();
    }
    if (!chosenLetter){
        return;
    }
}

function winGame(){
    alert("!Congratulations! You guessed the word!");
    let restartGame = confirm("Play again?");
    if(restartGame){
        location.reload();
    }else{
        alert("Alright then...");
    }
}