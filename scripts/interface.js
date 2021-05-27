//MVC (Model–view–controller)
document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event) {
    console.log(event.target);
    let square = event.target;
    let position = square.id;
    if(handleMove(position)){
        setTimeout(()=>{
            // alert()
            if(!alert(`Game Over! The Winner is ${player}`)){window.location.reload();}

        },10);
       
       

    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML =`<div class="${symbol}"></div>`
}
