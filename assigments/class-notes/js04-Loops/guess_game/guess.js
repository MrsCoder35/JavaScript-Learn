function playGame() {
    let randomNum = Math.floor(Math.random() * 101);
    let i = 3;
  
    while (i > 0) {
      let userNum = +prompt(`Guess a number between 0 and 100. You have three guesses.`);
  
      if (userNum === null) {
        alert("Thanks for Playing");
        return; // Oyun bittiğinde playGame fonksiyonundan çık
      }
      if (isNaN(userNum) || userNum < 0 || userNum > 100) {
        alert(`Invalid input. Please enter a number between 0 and 100`);
      } else if (userNum > randomNum) {
        i--;
        alert(`Too high! You have ` + i + ` attempts left`);
      } else if (userNum < randomNum) {
        i--;
        alert(`Too low! You have ` + i + ` attempts left`);
      } else {
        alert(`Congratulations! You've guessed the number correctly.`);
        return; // Oyun bittiğinde playGame fonksiyonundan çık
      }
    }
  
    alert(`Game over! The correct number was ` + randomNum);
  }
  
  while (true) {
    let random = prompt(`Welcome To Guess Game.. Are you wanna play with me? YES/NO`).toLowerCase();
  
    if (random === 'yes') {
      playGame();
    } else if (random === 'no') {
      
      alert(`Thanks for stopping by! Press OK to exit.`); // Döngüden çık, oyun bitsin ve ekrana mesaj gösterilsin
      break;
    } else {
      alert(`Invalid input. Please enter YES or NO.`);
    }
  }