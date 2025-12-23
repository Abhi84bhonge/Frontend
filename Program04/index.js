

let get=document.querySelector("#text");

get.addEventListener("click",()=>{
    get.style.color="red";
    get.innerText="Hello buddy color is red";
    myfun();
});


function myfun(){
     console.log("task completed");
     
}