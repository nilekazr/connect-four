// objects for each player

const players = {

    name1: "",
    name2: "",
    hasWon: false,
    myTurn:  false,
    gridToken: 1,
    player: 1
};
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
function dropToken(col) {
    for (i = 0; gridArray[i] < gridArray.length; i ++){
        if (gridArray[i] == 0){
            const innerArray = gridArray[i].length;
            for (j = 0; innerArray[j] < innerArray.length; j ++ ) {
                innerArray[col] = players.gridToken;
            }
        }
    }
    nextTurn();
}
dropToken(4);
console.log(gridArray);

 //function to change/count turns

function nextTurn(){
    if (players.player == 1){
        players.player ++;
        players.gridToken ++;
        return;
    }
    if (players.player == 2){
        players.player --;
        players.gridToken --;
        return;
    }
}

//console.log(players);

// function to check for a win


