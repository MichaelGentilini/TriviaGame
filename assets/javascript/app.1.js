$('document').ready(function () {

  // todo: create object for questions with answers and images
  var trivia = [{
      question: "What nationality was Cleopatra, Queen of Egypt?",
      answer1: "Assyrian",
      answer2: "Roman",
      answer3: "Egyptian",
      answer4: "Greek",
      correctAnswer: "Greek",
      image: "assets/images/greece.gif"
    },
    {
      question: "What color are aircraft black boxes?",
      answer1: "dark yellow",
      answer2: "bright orange",
      answer3: "jet black",
      answer4: "forest green",
      correctAnswer: "bright orange",
      image: "assets/images/orange.gif"
    },
    {
      question: "In which U.S. state was Tennessee Williams born?",
      answer1: "Alabama",
      answer2: "Tennessee",
      answer3: "Mississippi",
      answer4: "North Carolina",
      correctAnswer: "Mississippi",
      image: "assets/images/mississippi.gif"
    },
    {
      question: "What is the main ingredient of Bombay Duck?",
      answer1: "Duck",
      answer2: "Fish",
      answer3: "Chicken",
      answer4: "Pork",
      correctAnswer: "Fish",
      image: "assets/images/fish.gif"
    },
    {
      question: "In which country was Caesar salad invented?",
      answer1: "Mexico",
      answer2: "Italy",
      answer3: "Greece",
      answer4: "Luxemburg",
      correctAnswer: "Mexico",
      image: "assets/images/mexico.gif"
    },
    {
      question: "After which animal are the Canary Islands named?",
      answer1: "Dogs",
      answer2: "Fish",
      answer3: "Birds",
      answer4: "Horses",
      correctAnswer: "Dogs",
      image: "assets/images/dogs.gif"
    },
    {
      question: "Where did french fries originate?",
      answer1: "United States",
      answer2: "France",
      answer3: "Belgium",
      answer4: "Spain",
      correctAnswer: "Belgium",
      image: "assets/images/belgium.gif"
    },
    {
      question: "The average person does what thirteen times a day?",
      answer1: "Stares",
      answer2: "Swears",
      answer3: "Smiles",
      answer4: "Laughs",
      correctAnswer: "Laughs",
      image: "assets/images/laughter.gif"
    }
  ];

  //todo: create variables to track answers and the timer

  var right = 0;
  var wrong = 0;
  var unanswered = 0;
  var timer = 10;
  var questionCount = 0;
  var isAnswered = false;

  // var questionNumber = 0;
  // isClicked = false;

  // *User is greeted with a "press to play" button to start the game with the tile showing at the top

  var intro = function () {
    var welcome = $('<img id=runtime>');
    welcome.attr("src", "https://cdn.dribbble.com/users/27231/screenshots/2432051/welcome.gif");
    welcome.attr("width", "80%");
    welcome.css("margin-top", "100px");
    welcome.appendTo('#empty-question');

    var startBtn = $('<button>').addClass('btn btn-info');
    startBtn.text('Press to start');
    startBtn.appendTo('#empty-question');
  }
  // ! here is the intro screen
  // intro();

  // *After pushing the start button, a question with 4 possible answers populates the screen with a 15-30 second timer

  var newQuestion = function () {
    var displayTimer = $('<div>').addClass('timer mt-5');
    displayTimer.text("You have " + "<span id=timer>" + timer + "</span>" + "  seconds ");
    displayTimer.appendTo('#empty-question');
    // var questionBox = $('<div>').addClass('questions');
    var newDiv = $('<div>').addClass('questions');

    var userQuestion = $('<div>').addClass('userQuestion')
    userQuestion.text(trivia[questionCount].question);
    // add each button with value and text matching possible answers
    var newBtn = $('<button>').addClass('btn btn-warning btn-lg').attr('value', trivia[questionCount].answer1);
    newBtn.text(trivia[questionCount].answer1);

    var newBtn2 = $('<button>').addClass('btn btn-warning btn-lg').attr('value', trivia[questionCount].answer2);
    newBtn2.text(trivia[questionCount].answer2);

    var newBtn3 = $('<button>').addClass('btn btn-warning btn-lg').attr('value', trivia[questionCount].answer3);;
    newBtn3.text(trivia[questionCount].answer3);

    var newBtn4 = $('<button>').addClass('btn btn-warning btn-lg').attr('value', trivia[questionCount].answer4);
    newBtn4.text(trivia[questionCount].answer4);

    newDiv.append(userQuestion, newBtn, newBtn2, newBtn3, newBtn4);
    newDiv.appendTo('#empty-question');

    var answer = trivia[questionCount].correctAnswer;
    console.log("The answer is " + answer);

    $(".btn-warning").click(function (event) {
      var myAnswer = ($(this).prop("value"));
      isAnswered = true;

      if (answer == myAnswer) {
        console.log("winner winner");
        newDiv.empty
        // answered();
      } else {
        console.log("not this time");
        // answered();
      }
    });
  }


  // ! here is the question screen
  newQuestion();

  var answered = function () {

    var answerDiv = $('<div>').addClass('answers');

    var correctAnswer = $('<div>').text(
      "The answer is: " + trivia[questionCount].correctAnswer
    );
    correctAnswer.css("padding-top", "50px");
    correctAnswer.css("font-size", "40px");
    correctAnswer.css("color", "red");

    var correctImage = $('<div>').html("<img src=" + trivia[questionCount].image + " width='50%'>");
    correctImage.css("margin-top", "50px");
    // alert("Time Up!");

    answerDiv.append(correctAnswer, correctImage);
    answerDiv.appendTo('#empty-question');
  }
  // ! here is the answer screen
  // answered();



  // *if there is no answer, unsanswered is tracked

  // if ((isAnswered == false) && (timer === 0)) {
  //   unanswered++
  //   newQuestion();
  // }

  // *Upon selecting an answer, the answer pops up with a gif/image .... If correct, right++, if wrong wrong++

  //? var userAnswer = data from click
  //  todo if (userAnswer === Answer) {
  //   right++
  //   newQuestion();
  // } else if (userAnswer == "") {
  //   unanswered++
  //   newQuestion();
  // } else {
  //   wrong++
  //   newQuestion();
  // }

  // *Once a selection has been made, a new question is generated
  // if ((isAnswered = true) || (timer === 0)) {
  //   //  run newQuestion function to be defined
  //   function newQuestion();
  // }
  // *Once all questions have been answered, the final score is shown




});