function BestPlayer(input) {

  let length = input.length;
  if ((input[length - 1]) === "END") {
    length -= 1;
  }

  let theBest = "";
  var goalsMax = 0;
  let imax = 0;

  for (i = 0; i < length; i++) {
    Player = input[i];
    goals = parseInt(input[i + 1]);
    if (goals > goalsMax) {
      goalsMax = goals;
      imax = i;
      theBest = Player;
    }

  }
  console.log(`${theBest} is the best player!`);

  if (goalsMax >= 3) {
    console.log(`He has scored ${goalsMax} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${goalsMax} goals.`);

  }
}



BestPlayer
  (["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"
  ]);
BestPlayer
  (["Silva",
    "5",
    "Harry Kane",
    "10"
  ]);
BestPlayer
  (["Petrov",
    "2",
    "Drogba",
    "11"
  ]);
BestPlayer
  (["Rooney",
    "1",
    "Junior",
    "2",
    "Paolinio",
    "2",
    "END"
  ]);
BestPlayer
  (["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"
  ]);