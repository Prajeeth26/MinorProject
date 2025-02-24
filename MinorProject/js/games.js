let p;
let c;
let r=0;
function setChoice(choice, num){
    let player = document.getElementById("Player_choice");
    player.setAttribute("src", "/images/"+ choice +".jpg");
    player.setAttribute("alt", "image of "+ choice);
    p = num;
}
function setComputerChoice(){
    let choice_list = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    let computer = document.getElementById("Computer_choice");
    computer.setAttribute("src", "/images/" + choice_list[random] + ".jpg");
    computer.setAttribute("alt", "image of " + choice_list[random]);
    r+=1080;
    computer.style.transform = "rotateX("+r+"deg)";    
    computer.style.transition = "transform 1s";
    c = random;
    setTimeout( function (){
        if((p==0 && c==2) || (p==1 && c==0) || (p==2 && c==1)){
            alert("Player Wins!");
        }
        else if((c==0 && p==2) || (c==1 && p==0) || (c==2 && p==1)){
            alert("Computer Wins!");
        }
        else{
            alert("Draw!");
        }
    },1000)
}

