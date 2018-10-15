let random = Math.ceil(Math.random() * 100); // the number random will decide if the user wins or loses

let name = prompt("What is your name, brave knight?")

let play = confirm("Very well, " + name + ". Would you like to play a game?")
 
if(play) { // as in...if PLAY is true, is chosen
  let battle = confirm('Would you like to battle a dragon?');
  if (battle) { //as in..if BATTLE is true, if the user wants to battle
   let result = random > 50 ? "You defeated the dragon!" : "You lost."
  } else {
    //not battling - if the user click on Cancel
    alert("Come back when you are brave enough")
  }
}  else {
  alert("Maybe next time...")
}


