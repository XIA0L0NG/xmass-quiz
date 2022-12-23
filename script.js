//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("hp-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which of these weird things does Harry do before he knows he's a wizard?",
    options: ["Makes his hair grow back", "Make a dog shrink", "Multiply food", "Makes his shoes grow"],
    correct: "Makes his hair grow back",
  },
  {
    id: "1",
    question: "What do Hermione's parents do for a living?",
    options: ["They are doctors", "They are dentists", "They are teachers", "They are scientists"],
    correct: "They are dentists",
  },
  {
    id: "2",
    question: "What colour is Fleur Delacour's Yule ball dress?",
    options: ["Silver-Violet", "Gold-Levander", "Grey-Pink", "Silver-Grey"],
    correct: "Silver-Grey",
  },
  {
    id: "3",
    question: "What is Neville's mum called?",
    options: ["Delphi", "Alice", "Wendy", "Clementine"],
    correct: "Alice",
  },
  {
    id: "4",
    question: "What does the spell 'Avis' do? ",
    options: ["Summons Birds", "Makes things float", "Locks doors", "Makes fireworks"],
    correct: "Summons Birds",
  },
  {
    id: "5",
    question: "What is Sirius Black's middle name?",
    options: ["Orion", "Bastable", "Nufi", "He doesn't have one"],
    correct: "He doesn't have one",
  },
  {
    id: "6",
    question: "What is Seamus Finnegan's blood status?",
    options: ["Pure blood", "Half blood", "Muggle born", "Squib"],
    correct: "Half blood",
  },
  {
    id: "7",
    question: "What's the first spell we ever see Ron do?",
    options: ["A spell to multiply seweets", "A spell to tie his shoelace", "A spell to turn his pet yellow", "A spell to keep warm"],
    correct: "A spell to turn his pet yellow",
  },
  {
    id: "8",
    question: "What's Molly Weasley's maiden name?",
    options: ["Prewett", "Badger", "Sommerville", "Hearne"],
    correct: "Prewett",
  },
  {
    id: "9",
    question: "In the Philospher's Stone, what animal falls out of Christmas cracker Harry pulls? ",
    options: ["Hamsters", "Dormice", "White mice", "Shrews"],
    correct: "White mice",
  },
  {
    id: "10",
    question: "What wood is Draco Malfoy's wand made from?",
    options: ["Cherry", "Hawthorn", "Willow", "Yew"],
    correct: "Hawthorn",
  },
  {
    id: "11",
    question: "Which house is Padma Patel in?",
    options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    correct: "Ravenclaw",
  },
  {
    id: "12",
    question: "Which fruit do you tickle in a painting to get into the Hogwarts kitchens? ",
    options: ["Apple", "Orange", "Bokoya", "Pear"],
    correct: "Pear",
  },
  {
    id: "13",
    question: "Who is Nymphadora Tonk's aunt?",
    options: ["Neville's grandmother", "Sybil Trelawney", "Bellatrix Lestrange", "She doesn't have an aunt"],
    correct: "Bellatrix Lestrange",
  },
  {
    id: "14",
    question: "What does Dudley Dursley throw out of the window in Prisoner of Azkaban?",
    options: ["Football", "Playstation", "Remote controll", "His chance to get laid"],
    correct: "Playstation",
  },
  {
    id: "15",
    question: "Who is Percy Weasley's girlfriend in The Chamber of Secrets?",
    options: ["Penelope Clearwater", "Cho Chang", "Millicent Bullstrode", "Pansy Parkinson"],
    correct: "Penelope Clearwater",
  },
  {
    id: "16",
    question: "Which subject does Harry get a 'Dreadful' for in his O.W.L.s?",
    options: ["Potions", "Defence against dark magic", "History of magic", "Herbology"],
    correct: "History of magic",
  },
  {
    id: "17",
    question: "When is Hermione's birthday?",
    options: ["9th August", "1st April", "23rd December", "19th September"],
    correct: "19th September",
  },
  {
    id: "18",
    question: "What colour is the bridesmaid dress Ginny wears in the Deathly Hallows?",
    options: ["Green", "Gold", "Silver", "Purple"],
    correct: "Gold",
  },
  {
    id: "19",
    question: "Which country does Voldemort hide in in The Goblet of Fire?",
    options: ["Montenegro", "Macedonia", "Albania", "Kosovo"],
    correct: "Albania",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
