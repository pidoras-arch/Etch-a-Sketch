let containerDiv = document.querySelector(".grid");
createNewGridButton = document.querySelector("button")
createNewGridButton.textContent = "New Grid";
createNewGridButton.addEventListener("click",()=>{
    let num = prompt("how many cells do you want on each side?");
    //A larger number of squares results in more computer resources being used,
    //potentially causing delays, freezing, or crashing that we want to prevent.
    if(num>=100){
        alert("number is too big make sure it's less than 100");
    }else{
        containerDiv.textContent = "";
        createGrid(num);
    }
})
function createGrid(numPerSide = 16){
    for(let i = 0; i<numPerSide; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j<numPerSide; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
            cell.addEventListener("mouseover",()=> cell.style.backgroundColor = "green")
        }
        containerDiv.appendChild(row);
    }
}
createGrid();