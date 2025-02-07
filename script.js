let container = document.querySelector(".container")

// Create a grid of NxN
for (i = 0; i < 16; i++){
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (j = 0; j < 16; j++){
        let row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
    };
};

// Event triggering on mouse over
let allSquares = document.querySelectorAll(".row");

allSquares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = "purple";
    });
  });

// for (k = 0; k < allSquares.length; k++){
//     allSquares[k].addEventListener('mouseenter', () => {
//         console.log(`hovered square ${k}`);
//         allSquares[4].style.backgroundColor = "purple";
//     });
// }



// let fourthSquare = allSquares[3];
// console.log(fourthSquare);
// fourthSquare.style.backgroundColor = "blue";
// allSquares[5].style.backgroundColor = "purple";
