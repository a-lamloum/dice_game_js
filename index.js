// --- *** create Random Numbers *** --- // 

// Player 1 

function randNumOne() {
    var randNum = Math.random();
    randNum = (randNum * 6) + 1;
    return Math.floor(randNum);
}

// Player 2 

function randNumTwo() {
    var randNum = Math.random();
    randNum = (randNum * 6) + 1;
    return Math.floor(randNum);
}

// assign images to numbers
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

// h1 heading var 
var h1 = document.querySelector('h1');
var rand1 = randNumOne();
var rand2 = randNumTwo();



img1.setAttribute('src', 'images/dice' + rand1 +'.png');
img2.setAttribute('src', 'images/dice' + rand2 +'.png');

if (rand1 > rand2){
    h1.textContent = ('Player 1 Wins! 🚩');
} else if (rand2 > rand1){
    h1.textContent = ('Player 2 Wins! 🚩')
} else {
    h1.textContent = ('Draw!');
}

/* 
<script type="text/javascript">
    var dieImage;

    function start()
    {
        var button = document.getElementById(rollButton);
        button.addEventListener("click", rollDice, false);
        dieImage = document.getElementById("die1");
    }

    function rollDice()
    {
    setImage(dieImage);
    }

    function setImage(dieImg)
    {
    var dieValue = Math.floor(1 + Math.random() * 6);
    dieImg.setAttribute("src", "die" + dieValue + ".jpg");
    dieImg.setAttribute("alt", "dieImg with" + dieValue + "spots");

    if (dieValue == 6)
        {
        document.getElementById("sometext").innerHTML = "You Win!";
        }
    else
        {
        document.getElementById("sometext").innerHTML = "Roll Again";
        }

    }

    window.addEventListener("load", start, false);
</script>
</head>
<body>
    <form action = "#">
        <input id = "rollButton" type = "button" value = "Roll Dice">
    </form>
    <li>
        <img id = "die1" src = "die1.jpg" alt = "blankImage">
    </li>
    <div id = "sometext">Roll for a 6!</div>
</body>
*/

