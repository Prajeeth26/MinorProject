function insert(num){
    document.getElementById("result").value+=num;
}
function solve() { 
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y; 
}
function clr(){
    document.getElementById("result").value = "";
}