let boxes = document.querySelectorAll(".box");
let startNewGameBtn = document.querySelector(".new-game-btn");
resetBtn = document.querySelector(".reset-button");
let winMsg = document.querySelector(".win-msg");
 
let turnO= true; 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText = "O";
            turnO= false;
        }
        else{
            box.innerText = "X";
            turnO= true; 
        }
        box.disabled=true;
        checkWinner();
    });

});

const disableBoxes =() =>{
    for( let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    winMsg.classList.add("hide");
}



const showWinner = (winner) => {
    winMsg.innerText = `congratulations, Winner is ${winner}`;
    winMsg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2val != "" && pos3val != ""){
            if(pos1Val === pos2val && pos2val
                 === pos3val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
            }
        };
        startNewGameBtn.addEventListener("click",resetGame);
        resetBtn.addEventListener("click",resetGame);
