const boarder = Array.from(document.querySelectorAll(".wrapper"));
const person = document.querySelector(img);
function game () {
    const randomIndex = () => {
        return Math.floor(Math.random() * boarder.length);
    }
for(let i =0; i < boarder.length; i++) {
    const counter = boarder[randomIndex];
    boarder[counter].classList.add(img);
    if(boarder[counter].classList.contains(img)) {
        boarder[counter].classList.remove(img);
    }
}
const timerId = ()=> {
    setInterval(game,500);
setTimeout(()=> {
    clearInterval(timerId);
},500);
}
boarder.forEach(element => {
    element.addEventListener("click",timerId);
});
}
