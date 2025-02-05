let container = document.querySelector(".container")

for (i = 0; i < 16; i++){
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    for (j = 0; j < 16; j++){
        let row = document.createElement("div");
        row.classList.add("square");
        square.appendChild(row);
    };
};

