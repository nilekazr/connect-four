// object for each player

const players = [
    { name: "Player 1", hasWon: false, },
    { name: "Player 2", hasWon: false, },
]
let playerToken = 1;
document.querySelector('h1').innerText = "it's "+players[0].name+"'s Turn!";
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
        console.log(players[playerToken-1].hasWon);
        colorswap(row,col);
        if (players[playerToken-1].hasWon == true){
            document.querySelector("h1").innerHTML = players[playerToken-1].name + " has won the game! What a sp0o0ky gamer!";
            return;
        }
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
    let accum = 0;
    //horizontal win
    for (i=0;i<7;i++){
        if (gridArray[row][i]==gridArray[row][col]){
            accum++;
        }
        else{
            accum=0;
        }
        if (accum>=4){
            return players[playerToken-1].hasWon = true;
    }
}   //vertical win
    for (i=0;i<6;i++){
        if (gridArray[i][col]==gridArray[row][col]){
        accum++;
        }
        else{
        accum=0;
        }
        if (accum>=4){
            return players[playerToken-1].hasWon = true;
        }
    }
}