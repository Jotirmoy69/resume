let boxs=document.querySelectorAll(".box");
let msgcon = document.querySelector(".msg-con")
let msg=document.querySelector("#msg");
let hide = document.querySelector("#hide")

let true0 = true;

const winp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxs.forEach( (box) =>{
    box.addEventListener("click" , () => {
        console.log("button was clicked");
        if(true0 ===true){
            box.innerText = "X";
            true0=false;
        } 
        else{
            box.innerText = "O";
            true0=true;
        }
        box.disabled = true;

        win();
    });
});

let db = () => {
    for( let box of boxs){
        box.disabled = true;
    }
}

const showinner = (win) =>{
    msg.innerText = `Congratulations , Winner is ${win}`;
    db () ;
}

let win = () => {
    for(let ptrn of winp){
        let ptn1 = boxs[ptrn[0]].innerText;
        let ptn2= boxs[ptrn[1]].innerText;
        let ptn3= boxs[ptrn[2]].innerText;
        if(ptn1 != "" && ptn2 != "" && ptn3 != "" ){
            if(ptn1 === ptn2 && ptn2 === ptn3 ){
                console.log("Winner" ,ptn1);
                showinner (ptn1);
            }
        }
        
    }
}

