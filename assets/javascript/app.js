// Set variables for questions with answers, track correct and incorrect answers, as well as the timer
var trivia = [{
    question: "What nationality was Cleopatra, Queen of Egypt?",
    answerA: "Assyrian",
    answerB: "Roman",
    answerC: "Egyptian",
    answerD: "Greek",
    correctAnswer: "Greek",
    image: "assets/images/greece.gif"
  },
  {
    question: "What color are aircraft black boxes?",
    answerA: "dark yellow",
    answerB: "bright orange",
    answerC: "jet black",
    answerD: "forest green",
    correctAnswer: "bright orange",
    image: "assets/images/orange.gif"
  },
  {
    question: "In which U.S. state was Tennessee Williams born?",
    answerA: "Alabama",
    answerB: "Tennessee",
    answerC: "Mississippi",
    answerD: "North Carolina",
    correctAnswer: "Mississippi",
    image: "assets/images/mississippi.gif"
  },
  {
    question: "What is the main ingredient of Bombay Duck?",
    answerA: "Duck",
    answerB: "Fish",
    answerC: "Chicken",
    answerD: "Pork",
    correctAnswer: "Fish",
    image: "assets/images/fish.gif"
  },
  {
    question: "In which country was Caesar salad invented?",
    answerA: "Mexico",
    answerB: "Italy",
    answerC: "Greece",
    answerD: "Luxemburg",
    correctAnswer: "Mexico",
    image: "assets/images/mexico.gif"
  },
  {
    question: "After which animal are the Canary Islands named?",
    answerA: "Dogs",
    answerB: "Fish",
    answerC: "Birds",
    answerD: "Horses",
    correctAnswer: "Dogs",
    image: "assets/images/dogs.gif"
  },
  {
    question: "Where did french fries originate?",
    answerA: "United States",
    answerB: "France",
    answerC: "Belgium",
    answerD: "Spain",
    correctAnswer: "Belgium",
    image: "assets/images/belgium.gif"
  },
  {
    question: "The average person does what thirteen times a day?",
    answerA: "Stares",
    answerB: "Swears",
    answerC: "Smiles",
    answerD: "Laughs",
    correctAnswer: "Laughs",
    image: "assets/images/laughter.gif"
  }
];
var right = 0;
var wrong = 0;
var unanswered = 0;
var timer = 4;
// var questionNumber = 0;
// isClicked = false;

// $(document).ready(function () {

function reset() {
  var timer = 11;
}

// alert("you got " + score + " out of " + trivia.length);
// //  Variable that will hold our interval ID when we execute
//  the "run" function
var interval;

//  When the stop button gets clicked, run the stop function.
// $("#stop").on("click", stop);

// //  When the resume button gets clicked, execute the run function.
// $("#resume").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX********
//  Clearing the interval prior to setting our new interval will not allow multiple instances.
function run() {
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
}

function question() {}
//  The decrement function.
function decrement() {
  //  Decrease number by one.
  timer--;

  for (var j = 0; j < trivia.length; j++) {

    console.log(trivia[j].question);
    // show timer on screen
    // $("#timer").html("<h3> You have " + timer + " seconds left</h3>");

    // // display question and possible answers
    // $("#empty-question").html("<h3>" + trivia[j].question + " </h3>");

    // $("#answer-a").html("<button>" + trivia[j].answerA + "</button>");
    // $("#answer-b").html("<button>" + trivia[j].answerB + "</button>");
    // $("#answer-c").html("<button>" + trivia[j].answerC + "</button>");
    // $("#answer-d").html("<button>" + trivia[j].answerD + "</button>");

    // $("#answer-box > div > button").click(function () {
    //   console.log('you answered: + trivia.answer');
    //   // console.log(this.text);
    // });

    //  Once number hits zero...

    if (timer === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up.
      $("#correct-answer").html(
        "<h4>" + ("The answer is: " + trivia[j].correctAnswer) + " </h4>"
      );
      $("#empty-image").html("<img src=" + trivia[j].image + " width='30%'>");
      // alert("Time Up!");
      reset();
    }
  }
}

//  The stop function
function stop() {
  //  Clears our interval
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(interval);
}

//  Execute the run function.
run();
// });