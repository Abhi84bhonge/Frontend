
// let change=document.querySelector("#mode");
// let currmode="light";
// change.addEventListener("click",()=>{
//     if(currmode==="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }else{
//         currmode="light";
//        document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);

// })


// const choices=document.querySelector(".choice");

// choices.forEach(choice => {
//     console.log(choice);
//     choices.addEventListener(onclick=>{
//         console.log("choice was clicked");
//     })
// });



let userscore=0;
let compscore=0;

const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const compparagraph=document.querySelector("#comp");
const userparagraph=document.querySelector("#user")


const computerchoice=()=>{
    const options=["paper","stone","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}

const draw=()=>{
        console.log("Draw Game ");
}

const playgame=(userchoice)=>{
    console.log("user choice ",userchoice);
    const compchoice=computerchoice();
    console.log("computer choice",compchoice);
    
    if(userchoice===compchoice){
        draw();
       userparagraph.innerText=userchoice;
       compparagraph.innerText=compchoice;
    }else{
        let userwin=true;

        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
            userparagraph.innerText=userchoice;
         compparagraph.innerText=compchoice;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
          userparagraph.innerText=userchoice;
         compparagraph.innerText=compchoice;
        }else{
            userwin=compchoice==="stone"?false:true;
           userparagraph.innerText=userchoice;
          compparagraph.innerText=compchoice;
        }
        if(userwin){
            userscore++;
            userpara.innerText=userscore;
            msg.innerText="you win";
        }else{
            compscore++;
            comppara.innerText=compscore;
            msg.innerText="you lose";
        }
    }

    console.log(userscore);
    console.log(compscore);
    };


choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    });
});

