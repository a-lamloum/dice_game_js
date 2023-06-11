
function genrandom(){

    h1 = document.querySelector("h1");
    img1 = document.querySelector(".img1");
    img2 = document.querySelector(".img2")
    // generate random numbers
    randomNumber1 =  Math.floor(Math.random()*6)+1;
    randomNumber2 =  Math.floor(Math.random()*6)+1;
    
    // change images using random number from 1 - 6
    img1.src="./images/"+randomNumber1+"white.png";
    img2.src="./images/"+randomNumber2+"black.png";
    
    // change text according to the result 
    if (randomNumber1 > randomNumber2){
        h1.textContent="Player 1 Wins!!🎉";
        // h1.style.fontSize="5rem";
    }else if (randomNumber2 === randomNumber1) { 
        h1.textContent="Try agian!!👀";
    }else if (randomNumber2 > randomNumber1){
        h1.textContent="Player 2 Wins!!🎉";
        // h1.style.fontSize="5rem";
    };
}
document.querySelector(".button").addEventListener("click", genrandom);
