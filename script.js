const container = document.getElementById("sketch-container");
document.getElementById("grid-size").addEventListener("click", () => { updateGrid() });

function createGrid(gridNum){
     for (let i = 0; i < gridNum; i++) {
          const row = document.createElement('div')
          row.classList.add("row")
          for (let j = 0; j < gridNum; j++) {
               const square = document.createElement('div')
               square.classList.add("square")
               row.appendChild(square)
          }
     container.appendChild(row)
     }
}

function updateGrid(){
     const userResponse = prompt("Choose a grid size between 5 and 100");

     if (userResponse < 5 || userResponse > 100) {
          alert("Choose a number between 5 and 100");
     }
     container.querySelectorAll("div").forEach(e => e.remove());
     createGrid(parseInt(userResponse));
}

createGrid(16);