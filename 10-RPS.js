let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };

  function updateScoreBoard() {
    document.querySelector('.jsscore').innerHTML = `Wins ${score.Wins}, Losses ${score.Losses} , Ties ${score.Ties}`
  }

  function playerSelector(select) {
    const compChoice = computerMoveFunction();
    let Result = ''

    if (select === 'Rock') {
      if (compChoice === 'Rock') {Result = "Tie"}
      else if (compChoice === 'Paper') {Result = "You Lose"}
      else if (compChoice === 'Scissor') {Result = "You Win"};
    }

    else if (select === 'Paper') {
      if (compChoice === 'Rock') {Result = "You Win"}
      else if (compChoice === 'Paper') {Result = "Tie"}
      else if (compChoice === 'Scissor') {Result = "You Lose"}
    }

    else if (select === 'Scissor') {
      if (compChoice === 'Rock') {Result = "You Lose"}
      else if (compChoice === 'Paper') {Result = "You Win"}
      else if (compChoice === 'Scissor') {Result = "Tie"};
    }

    if (Result === "You Win") {score.Wins++}
    else if (Result === "You Lose") {score.Losses++}
    else if (Result === "Tie") {score.Ties++}

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreBoard();

    document.querySelector('.js-moves').innerHTML = 
    `You ${select}
    <img class="move-icon" src="rock-emoji.png">
    <img class="move-icon" src="rock-emoji.png">
    Computer${compChoice} `

    document.querySelector('.js-result').innerHTML = `${Result}`


/*
    alert(`You Picked ${select}. Computer Picked ${compChoice}. ${Result}
Wins: ${score.Wins} , Losses: ${score.Losses} , Ties: ${score.Ties}`);
*/
  }

  function computerMoveFunction() {
    const randomNumber = Math.random();
    let computerMove = ''

    if (randomNumber < 1 / 3) {computerMove = 'Rock'}
    else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {computerMove = 'Paper'}
    else if (randomNumber > 2 / 3) {computerMove = 'Scissor'}
    return computerMove
  }