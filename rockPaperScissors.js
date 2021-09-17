//User choice
const getUserChoice=(userInput)=>{
  userInput=userInput.toLowerCase();
  if(userInput==='rock'|| userInput==='paper' || userInput==='scissors'||userInput==='bomb')
  {
    return userInput;
  }
  else
  {
    console.log('Error!!Enter- rock/paper/scissors');
  }
};
  //test getuserchoice
  //console.log(getUserChoice('Paper'));
  //Computer generated choice
  function getComputerChoice()
  {
    let choice=Math.floor(Math.random()*3);
    switch(choice)
    {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;    
      default:
        return;
    }
  }
  //console.log(getComputerChoice());
  //Determine winner
  function determineWinner(userChoice,computerChoice)
  {
    if(userChoice===computerChoice){
      return 'Game was a tie!';
    }
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'Computer won!';
      }
      else{
        return 'You won!';
      }
    }
    if(userChoice==='paper'){
      if(computerChoice==='scissors'){
        return 'Computer won!';
      }
      else{
        return 'You won!';
      }
    }
    if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Computer won!';
      }
      else{
        return 'You won!';
      }
    }
    //cheat code
    if(userChoice==='bomb'){
      return 'You won!';
    }
  }
  //console.log(determineWinner('paper','rock'));
  function playGame()
  {
    let userChoice=getUserChoice('bomb');
    let computerChoice=getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  }
  //start game
  playGame();