# sp0o0ky connect-four! 
My game is a connect-four clone with 2 players with different colors and 2 win conditons, vertical and horizontal.

---

## The Inspo 
I love the game! I have at home and played it since I was a kid. It seemed like a nice balance between dynamic logic in javascript and displaying stuff in html and css. After this project although, I have a new appreciation for the logic that goes into even the simplest games.

---

## game screen caps
![Start Screen](/screenshots/game1.PNG)
![Start Screen](/screenshots/game2.PNG)
![Start Screen](/screenshots/game3.PNG)

---

## user stories 
* Each player takes turns dropping a token into a column on the grid
* tokens can only be dropped on top of other tokens
* the first player to get 4 tokens in a row, horizontally or vertically wins the game

---

## code snippets

The win conditions 
``` function checkWin(row,col,playerToken){
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
} ```
---

placing checkers in the grid

    ```let gridArray = [
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
}```

---

## future developments
* Name input
* an AI to play against
* a refresh button
* counting game wins

