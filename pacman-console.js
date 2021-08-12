// console.log('Hello, Pac-Man!');

// console.log('Pac-Man eats ghosts for lunch.');

const ghosts = ["ghost1 ", 'ghost2 ', 'redghost3'];

// console.log('wow look at how many ghosts i have ' + ghosts);

// const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
// console.log(ghosts);



if (true) {
    for (let i = 0; i < ghosts.length; i++) {
        console.log('pac-dude ate ghost ' + ghosts[i]);  
    };
} else {
    console.log('pac-dude is hungry')
}

let ghost = 'red';
let isEvil;

switch (ghost) {
    case "red":
        isEvil = true
        break;
        case "white":
            isEvil = false
            break;

    default:
        console.log('we got a problem')
        break;
}

console.log(isEvil)

function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }
  
    return currentScore + scoreToAdd;
  }

let score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);