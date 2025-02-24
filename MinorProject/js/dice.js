let r = 0;    
function roll(){    
    let dice = document.getElementById("dice_img");
    let random = Math.floor(Math.random()*6) + 1;
    r += 1080;
    dice.style.transform = "rotateX("+r+"deg)";    
    dice.style.transition = "transform 1s";
    dice.setAttribute("src", "images/dice" + random + ".png");
}
