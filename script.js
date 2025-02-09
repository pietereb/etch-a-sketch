let container = document.querySelector(".container");

// Create a grid of NxN
for (i = 0; i < 16; i++){
    let column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (j = 0; j < 16; j++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.backgroundColor = "white";
        column.appendChild(row);
    };
};

// Create reset button
reset = document.querySelector(".reset");
reset.addEventListener('click', () =>{
    console.log("clicked");
    let userChoice = prompt("How many squares?");
    console.log(userChoice);
    if (userChoice > 0 && userChoice < 101){

        let allColumns = document.querySelectorAll(".column");
        allColumns.forEach((column) => {
            column.remove();
          });

        for (i = 0; i < userChoice; i++){
            let column = document.createElement("div");
            column.classList.add("column");
            container.appendChild(column);
            for (j = 0; j < userChoice; j++){
                let row = document.createElement("div");
                row.classList.add("row");
                row.style.backgroundColor = "white";
                column.appendChild(row);
            };
        };

        let allSquares = document.querySelectorAll(".row");
        allSquares.forEach((square) => {
            square.addEventListener('mouseenter', () => {
              square.style.backgroundColor = `hsl(${RANDOMCOLOUR}, 100%, 50%)`;
            });
          });

    } else {
        alert("Invalid Choice! Pick a number between 1 and 100.");
    };
}
);

// Event triggering on mouse over using a fixed colour
const RANDOMCOLOUR = Math.random()*360;
let allSquares = document.querySelectorAll(".row");
allSquares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = `hsl(${RANDOMCOLOUR}, 100%, 50%)`;
    });
  });

// Event triggering on mouse over using a random colour
// let allSquares = document.querySelectorAll(".row");
// allSquares.forEach((square) => {
//     square.addEventListener('mouseenter', () => {
//       square.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
//     });
//   });


