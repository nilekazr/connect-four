// object for each player

const players = [
    { name: "bob", hasWon: false, },
    { name: "jeff", hasWon: false, },
]
let playerToken = 1;
document.querySelector('h1').innerText = "it's "+players[1].name+"'s Turn!";
// function to create a grid
    let gridArray = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ];
    console.log(gridArray[0][0]);
    
// function to place checkers
function dropToken(row,col) {
    let gridSpot = gridArray[row][col];
    if((gridArray[row][col]) !== (gridArray[5][col])){
    if(gridArray[parseInt(row+1)][col] == 0){
        return;
    }
    }
    if(gridSpot == 0){
        gridArray[row][col]= playerToken;
        checkWin(row,col,playerToken);
        colorswap(row,col);
        nextTurn();
    }
}


//changing the color of the token

function colorswap(row,col){
    console.log(row,col);
    if (gridArray[row][col]==0) { 
        document.getElementById("cell"+row+col).style.backgroundColor="#FFFFFF";
        console.log("cell"+row+col);

    } else if (gridArray[row][col]==1) {
        document.getElementById("cell"+row+col).style.backgroundColor="#FFFF00";

    } else if (gridArray[row][col]==2) { 
        document.getElementById("cell"+row+col).style.backgroundColor="#FF0000";

    }
}

// changing the turn;

function nextTurn(){
    if (playerToken == 1){
        document.querySelector('h1').innerHTML="It's " + players[1].name + "'s Turn!";
        playerToken++;
        return;
    }
    if (playerToken == 2){
        document.querySelector('h1').innerHTML="It's " + players[0].name + "'s Turn!";
        playerToken--;
        return;
    }
        
}
// function to check for a win
function checkWin(row,col,playerToken){
    let count = 0;
    for (i=0;i<5;i++){
        if (gridArray[row][i]==gridArray[row][col]){
            count++;
        }
        else{
            count=0;
        }
        if (count>=4){
            return players[playerToken-1].name + " has Won!";
        }
    }
}
    
    /* for (i=0; i < gridArray.length; i++){
        let innerArray = gridArray[i];
        for (j=0;j <innerArray.length; j++){
            while (innerArray[j] ==  1||2){
                let horizontalWin = 0;
                horizontalWin++;
                if (horizontalWin == 4){
                    winner = true;
                    break;
                }
                else{
                    break;
                }
            }
        }
    }
    for(i=0;i < gridArray.length;i++){
        let innerArray = gridArray[i];
        for (j = 0; j < innerArray; j++){
            while(innerArray[j] == 1||2){
                if(innerArray[j] == gridArray[i+1][j]){
                    let verticalWin = 0;
                    verticalWin++;
                    if(verticalWin == 4){
                        winner = true;
                    }
                }
            }

        }
        
    }
*/