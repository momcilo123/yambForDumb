let firstRow = document.getElementsByClassName('row first-row')[0]
let secondRow = document.getElementsByClassName('row second-row')[0]
let thirdRow = document.getElementsByClassName('row third-row')[0]
let fourthRow = document.getElementsByClassName('row fourth-row')[0]
let fifthRow = document.getElementsByClassName('row fifth-row')[0]
let sixthRow = document.getElementsByClassName('row sixth-row')[0]
let dices = document.getElementsByClassName('dice')
let diceOne = document.getElementsByClassName('dice')[0]
let diceTwo = document.getElementsByClassName('dice')[1]
let diceThree = document.getElementsByClassName('dice')[2]
let diceFour = document.getElementsByClassName('dice')[3]
let diceFive = document.getElementsByClassName('dice')[4]
let diceSix = document.getElementsByClassName('dice')[5]
let dicesPic = document.getElementsByClassName('fa-solid')
let scoreOne = document.getElementById('scoreOne')
let scoreTwo = document.getElementById('scoreTwo')
let playerOne = document.getElementById('player1')
let playerTwo = document.getElementById('player2')
let playerOneName = document.getElementById('playerOneName')
let playerTwoName = document.getElementById('playerTwoName')

let name1 = prompt('Player1:')
let name2 = prompt('Player2:')


playerOneName.innerHTML = name1
playerTwoName.innerHTML = name2



let playerOneCells = document.querySelectorAll('#player1 td');
let playerTwoCells = document.querySelectorAll('#player2 td');

playerOneCells.forEach(cell => {
    cell.classList.add('player-one');
});


playerTwoCells.forEach(cell => {
    cell.classList.add('player-two');
});



let btn = document.getElementById('button')

let dicesCounter = 0


function resetDices() {
    diceOne.innerHTML = '';
    diceOne.style.backgroundColor = "white";
    diceTwo.innerHTML = '';
    diceTwo.style.backgroundColor = 'white';
    diceThree.innerHTML = '';
    diceThree.style.backgroundColor = 'white';
    diceFour.innerHTML = '';
    diceFour.style.backgroundColor = 'white';
    diceFive.innerHTML = '';
    diceFive.style.backgroundColor = 'white';
    diceSix.innerHTML = '';
    diceSix.style.backgroundColor = 'white';
    dicesCounter = 0;
    counterFunction = 0;
}


let counterFunction = 0

function rollingTheDices () {

    counterFunction++

     console.log(counterFunction)

    if (counterFunction > 3) {
        return
    }

    let finalArr = []
    
    for (i = 0; i < 6; i ++) {
        let random = Math.floor(Math.random() * 6 + 1)
        finalArr.push(random)
    }

    if (diceOne.style.backgroundColor === "aquamarine") {diceOne.style.backgroundColor ='aquamarine'} else {diceOne.innerHTML = finalArr[0]}

    if (diceTwo.style.backgroundColor === "aquamarine") {diceTwo.style.backgroundColor ='aquamarine'} else {diceTwo.innerHTML = finalArr[1]}

    if (diceThree.style.backgroundColor === "aquamarine") {diceThree.style.backgroundColor ='aquamarine'} else {diceThree.innerHTML = finalArr[2]}

    if (diceFour.style.backgroundColor === "aquamarine") {diceFour.style.backgroundColor ='aquamarine'} else {diceFour.innerHTML = finalArr[3]}

    if (diceFive.style.backgroundColor === "aquamarine") {diceFive.style.backgroundColor ='aquamarine'} else {diceFive.innerHTML = finalArr[4]}

    if (diceSix.style.backgroundColor === "aquamarine") {diceSix.style.backgroundColor ='aquamarine'} else {diceSix.innerHTML = finalArr[5]}
  
}


diceOne.addEventListener('click', () => {
    if (diceOne.style.backgroundColor === 'aquamarine') {diceOne.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceOne.style.backgroundColor = "aquamarine"
    dicesCounter++
}
    console.log(dicesCounter)

})
diceTwo.addEventListener('click', () => {
    if (diceTwo.style.backgroundColor === 'aquamarine') {diceTwo.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceTwo.style.backgroundColor = "aquamarine"
    dicesCounter++}
    console.log(dicesCounter)
})
diceThree.addEventListener('click', () => {
    if (diceThree.style.backgroundColor === 'aquamarine') {diceThree.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceThree.style.backgroundColor = "aquamarine"
    dicesCounter++}
    console.log(dicesCounter)
})
diceFour.addEventListener('click', () => {
    if (diceFour.style.backgroundColor === 'aquamarine') {diceFour.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceFour.style.backgroundColor = "aquamarine"
    dicesCounter++}
    console.log(dicesCounter)
})
diceFive.addEventListener('click', () => {
    if (diceFive.style.backgroundColor === 'aquamarine') {diceFive.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceFive.style.backgroundColor = "aquamarine"
    dicesCounter++}
    console.log(dicesCounter)

})
diceSix.addEventListener('click', () => {
    if (diceSix.style.backgroundColor === 'aquamarine') {diceSix.style.backgroundColor = 'white';
    dicesCounter--;} else {
    diceSix.style.backgroundColor = "aquamarine"
    dicesCounter++}
    console.log(dicesCounter)
})



let firstRowTD = document.querySelectorAll('td')


function typingValues () {

    firstRowTD.forEach((td, index) => {
        td.addEventListener('click', function( ) {
    
            if (td.innerHTML != '') {
                return
            }
    
            if (index > 1 && firstRowTD[index - 1].innerHTML === '') {
                return
            }
            if (parseInt(firstRowTD[index - 1].innerHTML) === 2 && firstRowTD[index -2].innerHTML === '') {
                return
            }
    
            if (parseInt(firstRowTD[index - 1].innerHTML) === 3 && firstRowTD[index -2].innerHTML === '') {
                return
            }
            if (parseInt(firstRowTD[index - 1].innerHTML) === 4 && firstRowTD[index -2].innerHTML === '') {
                return
            }
            if (parseInt(firstRowTD[index - 1].innerHTML) === 5 && firstRowTD[index -2].innerHTML === '') {
                return
            }
            if (parseInt(firstRowTD[index - 1].innerHTML) === 6 && firstRowTD[index -2].innerHTML === '') {
                return
            }
    
            let playerTwoCount = 0
            let playerOneCount = 0
            for (i = 0; i < playerOneCells.length; i++) {
                    if (playerOneCells[i].innerHTML === '.' || playerOneCells[i].innerHTML === 'o' || playerOneCells[i].innerHTML === 'G') {
                        playerOneCount++
                    }
            }
            console.log("this is playerOneCount",playerOneCount)
    
            for (i = 0; i < playerTwoCells.length; i++) {
                if (playerTwoCells[i].innerHTML === '.' || playerTwoCells[i].innerHTML === 'o' || playerTwoCells[i].innerHTML === 'G') {
                    playerTwoCount++
                }
            }
    
            console.log("this is playerTwoCount",playerTwoCount)
            
            if (playerOneCount > playerTwoCount) {
              
              }
                   

            
            if (dicesCounter < 4) {
                td.innerHTML = "."
                resetDices()
            } else if (dicesCounter == 4) {
                td.innerHTML = "o" 
                resetDices()   
            } else if (dicesCounter == 5) {
                td.innerHTML = 'G'
                if (td.classList.contains('player-one')) {
                    scoreOne.innerHTML = parseInt(scoreOne.innerHTML) + 1;
                } else if (td.classList.contains('player-two')) {
                    scoreTwo.innerHTML = parseInt(scoreTwo.innerHTML) + 1;
                }
                resetDices()
            }
                
        })
        
    })
    
    
}

function endingMessage() {
    let emptyFields = 60;

    firstRowTD.forEach((td, index) => {
        td.addEventListener('click', function () {
            if (td.innerText != '') {
                return
            } else if (firstRowTD[index - 1].innerHTML === '') {
                return
            }
            emptyFields--;

            if (emptyFields === 0) {
                let result = document.createElement('div')
                result.innerText = `${playerOneName.innerHTML} - ${playerTwoName.innerHTML} ${scoreOne.innerHTML} : ${scoreTwo.innerHTML}`
                result.style.fontSize = '50px'
                result.style.fontWeight = 900
                result.style.backgroundColor = '#CC7722'
                result.style.borderRadius = '10px'
                result.style.color = 'white'
                result.style.marginTop = '-530px'

                document.body.appendChild(result)
                
                let gameOverMessage = document.createElement('div');
                gameOverMessage.textContent = 'GAME OVER';
                gameOverMessage.style.fontSize = '30px';
                gameOverMessage.style.fontFamily = "Courier New"
                gameOverMessage.style.fontWeight = 900
                document.body.appendChild(gameOverMessage);

            }
            
            console.log(emptyFields);
        });
    });
}

endingMessage()

typingValues()


