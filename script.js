const quesEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 20);

quesEl.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText=`Score: ${score}`;

formEl.addEventListener("submit",(e)=>{
    const userAns = +inputEl.value;
    // e.preventDefault();

    if (userAns === correctAns) {
        score++
        updateLocalStorage();
        alert("Right Ans")
    }else{
        score--
        updateLocalStorage();
        alert("Wrong Ans")
    };
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}