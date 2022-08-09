//Model

//Controller
const mainCharacter = document.getElementById('players-character');
let mainScene = document.getElementById('scene-main');

let playerMovesUp = false;
let playerMovesLeft = false;
let playerMovesDown = false;
let playerMovesRight = false;
let x = window.innerWidth/2;
let y = window.innerHeight/2;

function characterBasicMovement(){

    addEventListener('keydown', e => {
        if(e.keyCode === 87){
            playerMovesUp = true;
        }
        if(e.keyCode === 65){
            playerMovesLeft = true;
        }
        if(e.keyCode === 83){
            playerMovesDown = true;
        }
        if(e.keyCode === 68){
            playerMovesRight = true;
        }
    });
    addEventListener('keyup', e => {
        if(e.keyCode === 87){
            playerMovesUp = false;
        }
        if(e.keyCode === 65){
            playerMovesLeft = false;
        }
        if(e.keyCode === 83){
            playerMovesDown = false;
        }
        if(e.keyCode === 68){
            playerMovesRight = false;
        }
    });
    
    if(playerMovesUp && y > 23){
        y = y - 2;
    }
    if(playerMovesLeft && x > 15){
        x = x - 2;
    }
    if(playerMovesDown && (y + 23) < window.innerHeight){
        y = y + 2;
    }
    if(playerMovesRight && (x + 15) < window.innerWidth){
        x = x + 2;
    }
    
    mainCharacter.style.top = y + 'px';
    mainCharacter.style.left = x + 'px';

    window.requestAnimationFrame(characterBasicMovement);
}
render();

//View

function render(){
    window.requestAnimationFrame(characterBasicMovement);
}
