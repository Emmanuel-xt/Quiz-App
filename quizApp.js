const questions = [
  {
    question: "Who is the President of America",
    answers: [
      { text: "Peter Obi", correct: false },
      { text: "Emmanuel Macron", correct: false },
      { text: "Joe Biden", correct: true },
      { text: "Donald Trump", correct: false },
    ],
  },
  {
    question: "Who is the President of Nigeria",
    answers: [
      { text: "Peter Obi", correct: true },
      { text: "Emmanuel Macron", correct: false },
      { text: "Joe Biden", correct: false },
      { text: "Donald Trump", correct: false },
    ],
  },
  {
    question: "Who is the President of France",
    answers: [
      { text: "Peter Obi", correct: false },
      { text: "Emmanuel Macron", correct: true },
      { text: "Joe Biden", correct: false },
      { text: "Donald Trump", correct: false },
    ],
  },
  {
    question: "which of these is the former President of America",
    answers: [
      { text: "Peter Obi", correct: false },
      { text: "Emmanuel Macron", correct: false },
      { text: "Joe Biden", correct: false },
      { text: "Donald Trump", correct: true },
    ],
  },
];

const questioniare = document.getElementById("question");
const answer = document.getElementById("answer_buttons");
const next = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  let currentQuestionIndex = 0;
  let score = 0;
  next.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  //   answer_buttons.innerHTML = "";
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  //   for the current question to display
  // the" questions[currentQuestionIndex]" gets either the question number 1 or son on
  // then the "currentQuestion.question" uses the property:value object method to get the value of the qustion by questions.question
  // ans displays it on the innerhtml of the specified element
  // currentQuestion gets the current question from the "questions" number and by default it is set to 0 by us

  questioniare.innerHTML = questionNo + ". " + currentQuestion.question;

  //   so to the answers , it gets the corresponding answers and then uses the "foreach" method to
  currentQuestion.answers.forEach((answer) => {
    // create a button element for each of the number of anwers , but remeber , this answer is also a list containing the
    // "text " and the "correct" item , so therefore
    const button = document.createElement("button");

    // we shall tell the button specifically to take-in the text that is the reason for the "answer.text" below ,
    // notice something we no longer called "question" who is the bigger boss because we are no longer choosing between
    // "question and answer " but we have arrived at answer now choosing between the two values of answer which is "text and" "correct"

    button.innerHTML = answer.text;
    // now we added the class that we have already defined for the demo options
    button.classList.add("ans");
    // now we append button to be under "answer_buttons" as it should be
    answer_buttons.appendChild(button);

    // here the current value of the "correct" ( that is true , nke bu eziokwu )is been stored in a "dataset"
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  // next.style.display = "none"
  while (answer_buttons.firstChild) {
    answer_buttons.removeChild(answer_buttons.firstChild);
  }
}
function selectAnswer(e) {
  // the e.target checks for the element that is clicked and the value is stored in the variable selectBtn
  const selectBtn = e.target;
  //  if the clicked element contained in the "selectedBtn" ie e.target ie "button" has thesame value
  // with the dataset.correct then the value is set to "true" ,rember that the dataset.correct has been set to carry a value of current "answer.correct"
  const iscorrect = selectBtn.dataset.correct === "true";
  if (iscorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  //   this gets the children of parent answer_buttons and then
  Array.from(answer_buttons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    // disables each of them , but before that checks the button that matched the dataset (correct) and adds the class "correc ie green background" to it
    button.disabled = true;
  });
  // then brings out the "next" element which was initially not set to display
  next.style.display = "block";
}

function showscore() {
  resetState();
  questioniare.innerHTML = `You scored ${score} out of ${questions.length}`;
  next.innerHTML = "Play Again";
  next.style.display = "block";
}

// add +1 to the currentQuestionIndex , remeber it has been counting from zero
// also when we arrive at the next question , if the currentQuestionIndex is still less than questions.length => repeat the function "showquestion()"
// else do the function show score which we would define in line 123
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

// if the currentQuestionIndex < questions.length it would handleNextButton else it will #see line130
next.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
