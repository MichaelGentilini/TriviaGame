$('document').ready(function () {

  // todo: create object for questions with answers and images
  var trivia = [{
      question: "What nationality was Cleopatra, Queen of Egypt?",
      answer: ["Assyrian", "Roman", "Egyptian", "Greek"],
      correctAnswer: "Greek",
      image: "assets/images/greece.gif"
    },
    {
      question: "What color are aircraft black boxes?",
      answer: ["dark yellow", "bright orange", "jet black", "forest green"],
      correctAnswer: "bright orange",
      image: "assets/images/orange.gif"
    },
    {
      question: "In which U.S. state was Tennessee Williams born?",
      answer: ["Alabama", "Tennessee", "Mississippi", "North Carolina"],
      correctAnswer: "Mississippi",
      image: "assets/images/mississippi.gif"
    },
    {
      question: "What is the main ingredient of Bombay Duck?",
      answer: ["Duck", "Fish", "Chicken", "Pork"],
      correctAnswer: "Fish",
      image: "assets/images/fish.gif"
    },
    {
      question: "In which country was Caesar salad invented?",
      answer: ["Mexico", "Italy", "Greece", "Luxemburg"],
      correctAnswer: "Mexico",
      image: "assets/images/mexico.gif"
    },
    {
      question: "After which animal are the Canary Islands named?",
      answer: ["Dogs", "Fish", "Birds", "Horses"],
      correctAnswer: "Dogs",
      image: "assets/images/dogs.gif"
    },
    {
      question: "Where did french fries originate?",
      answer: ["United States", "France", "Belgium", "Spain"],
      correctAnswer: "Belgium",
      image: "assets/images/belgium.gif"
    }, {
      question: "The average person does what thirteen times a day?",
      answer: ["Stares", "Swears", "Smiles", "Laughs"],
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

  // *User is greeted with a "press to play" button to start the game with the tile showing at the top

  // ! here is the intro screen

  var hello = function () {
    var welcome = $("<img/>", {
      id: "welcome-img",
      src: "https://cdn.dribbble.com/users/27231/screenshots/2432051/welcome.gif",
      alt: "welcome image"
    });
    welcome.appendTo("#empty-question");

    var startBtn = $("<button>").addClass("btn btn-info");
    startBtn.text("Press to start");
    startBtn.appendTo("#empty-question");

    $(".btn-info").click(function () {
      $("#empty-question").empty();
      $("#empty-question").append(question());
    });
  };

  var question = function () {

    // ! Countdown Control
    var timerInterval;

    function start() {
      clearInterval(timerInterval);
      timerInterval = setInterval(countDown, 1000);
    }

    function countDown() {
      timer--;
      $("#timer").html(timer);
      if (timer <= 5) {
        $("#timer").css("background-color", "yellow")
        $("#timer").css("color", "red")
        $("#timer").css("font-size", "40px")
      }
      if (timer === 0) {
        stop();
        unanswered++;
        $("#empty-question").empty();
        $("#empty-question").append(answered());
        clearInterval(timerInterval);
        timer = 10;
      }
    }

    function stop() {
      clearInterval(timerInterval);
    }


    // *After pushing the start button, a question with 4 possible answers populates the screen with a timer
    //  * display timer

    var displayTimer = $("<div>").addClass("timer");
    displayTimer.html(
      "You have " + "<span id=timer>" + timer + "</span>" + "  seconds "
    );
    displayTimer.appendTo("#empty-question");

    // ! Userquestions go here
    var newDiv = $('<div>').addClass('questions');

    var userQuestion = $("<div>").addClass("userQuestion");
    userQuestion.text(trivia[questionCount].question);
    newDiv.append(userQuestion);

    //! Dynamic Question (answer) BUTTONS
    for (let i = 0; i < 4; i++) {
      var newBtn = $('<button>');
      newBtn.addClass('btn btn-warning btn-lg');
      newBtn.text(trivia[questionCount].answer[i]);
      newDiv.append(newBtn);
      newDiv.appendTo('#empty-question');
    }
    start();

    var answer = trivia[questionCount].correctAnswer;

    //* add click function to button and reset timer
    $(".btn-warning").click(function (event) {
      var myAnswer = $(this).prop("text");
      clearInterval(timerInterval);
      timer = 10;
      if (answer == myAnswer) {
        right++;
        $("#empty-question").empty();
        $("#empty-question").append(answered());
      } else {
        wrong++;
        $("#empty-question").empty();
        $("#empty-question").append(answered());
      }
    });


  };

  // *Upon selecting an answer, the answer pops up with a gif/image .... If correct, right++, if wrong wrong++, if there is no answer, unsanswered is tracked

  var answered = function () {
    var answerDiv = $("<div>").addClass("answers");
    console.log(trivia[0].correctAnswer);
    var correctAnswer = $("<div>").html(
      "The answer is: " + trivia[questionCount].correctAnswer);

    var correctImage = $("<div>").addClass("answer-img").html(
      "<img src=" + trivia[questionCount].image + " width='50%'>"
    );

    // * The answer is shown for a few seconds and then a new Question is provided
    answerDiv.append(correctAnswer, correctImage);
    answerDiv.appendTo("#empty-question");
    setTimeout(newQuestion, 2000);
  };

  // *Once a selection has been made, a new question is generated
  function newQuestion() {
    if (questionCount + 1 === trivia.length) {
      questionCount++;
      $("#empty-question").empty();
      $("#empty-question").append(finalScore());
    } else {
      questionCount++;
      $("#empty-question").empty();
      $("#empty-question").append(question());
    }
  };

  // *Once all questions have been answered, the final score is shown
  function finalScore() {

    var displayComment = $('<h3>').addClass('comment');

    if (right == trivia.length) {
      displayComment.html("Wow, you're really smart!");
    } else if (unanswered == trivia.length) {
      displayComment.html("Is anybody home?");
    } else {
      displayComment.html("Good try!" + "<br>" + "You'll get all of them next time!");
    }

    var displayWins = $("<div>").addClass("wins");
    displayWins.html("Correct: " + right);

    var displayLosses = $("<div>").addClass("losses");
    displayLosses.html("Incorrect : " + wrong);

    var displayUnanswered = $("<div>").addClass("unanswered");
    displayUnanswered.text("Unanswered: " + unanswered);

    $("#empty-question").append(
      displayComment,
      displayWins,
      displayLosses,
      displayUnanswered
    );
    var endBtn = $("<button>").addClass("btn btn-info btn-end");
    endBtn.text("want to play again?");
    endBtn.appendTo("#empty-question");

    $(".btn-end").click(function () {
      right = 0;
      wrong = 0;
      unanswered = 0;
      questionCount = 0;
      $("#empty-question").empty();
      $("#empty-question").append(hello());
    });

  }

  // ! Start the game
  hello();
});