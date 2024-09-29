let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");   //we are accessing class...

const msg=document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompuChoice=()=>{
    const options=["rock","paper","scissors"];    //store in Array
    const randIdx=Math.floor(Math.random()*3);    //Generate random number using Math.random()
    return options[randIdx];

}


const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw.  Play Again.";   //when game will draw...
    msg.style.backgroundColor="yellow";    
    msg.style.color="black";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");                //who is winner?
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;    
        msg.style.backgroundColor="green";          //showMassageToTheUser.
        msg.style.color="white";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText=`You Lose. ${compChoice} beats Your ${userChoice}`;   
        msg.style.backgroundColor="red";   
        msg.style.color="black";
        
    }
}


const playGame=(userChoice)=>{
    console.log("User Choice=",userChoice);
    //Generate computer choice->modular way of programming
    const compChoice=genCompuChoice();
    console.log("Computer Choice=",compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors or paper
            userWin=compChoice==="paper"?false:true;    //ternary operator...
        }else if(userChoice==="paper"){
            //rock or scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock or paper
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);  //who is our winner?
    }
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");    //we can find the Id.
        playGame(userChoice);

    });
});