// object for each player

const players = [
    { name: "bob", hasWon: false, },
    { name: "jeff", hasWon: false, },
]
let playerToken = 1;
// function to create a grid
    gridArray = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ];
// function to place checkers
console.log('hello');
function dropToken(row,col) {
    let gridSpot = gridArray[0][row][col];
        while (gridSpot !== 0){
            gridSpot = gridArray[0][row-1][col];
        }
    if(gridSpot == 0){
        gridSpot = playerToken;
        colorswap();
        nextTurn();
    }
}

    //nextTurn();

 //function to change/count turns
function colorswap(){
    if (gridArray[0][row][col]==0) { 
        document.getElementById("cell"+row+col).style.backgroundColor="#FFFFFF";
} else if (gridArray[row][col]==1) {
        document.getElementById("cell"+row+col).style.backgroundColor="#FFFF00";
} else if (gridArray[row][col]==2) { 
        document.getElementById("cell"+row+col).style.backgroundColor="#FF0000";
}
}
function nextTurn(){
    if (playerToken == 1){
        playerToken++;
        return;
    }
    if (playerToken == 2){
        playerToken--;
        return;
    }
        
}
// function to check for a win
