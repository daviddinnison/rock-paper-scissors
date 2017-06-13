function RockPaperScissors(userChoice){
    //find computer
    var computer = 1 + Math.floor((Math.random()*3));
    
    //convert computer to string
    if(computer === 1) {
    	computer = 'rock';
    } if(computer === 2) { 
    	computer = 'paper';
    } if(computer === 3) {
    	computer === 'scissors';
    }

    //convert userChoice to string
    if(userChoice === 1) {
    	userChoice = 'rock';
    } if(userChoice === 2) {
    	userChoice = 'paper';
    } if(userChoice === 3) {
    	userChoice === 'scissors';
    }


    var playerWin = function() {
    	console.log(userChoice + ' beats ' + computer + '. You win!');
    }

    var playerLose = function() {
    	console.log('The computer\'s ' + computer + ' beats your ' + userChoice + '. You lose!');
    }

    console.log('You have chosen ' + userChoice + ' and the computer has chosen ' + computer);

    function result() {
    	if(computer === userChoice) {
    		console.log('Tie game');
    	} if(computer === 'rock' && userChoice === 'paper') {
    		playerLose();
    	} if(computer === 'rock' && userChoice === 'scissors') {
    		playerWin();
    	} if(computer === 'paper' && userChoice === 'rock') {
    		playerWin();
    	} if(computer === 'paper' && userChoice === 'scissors') {
    		playerLose();
    	}  
    }
    result();
}

RockPaperScissors(2);