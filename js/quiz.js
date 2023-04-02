export class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.numOfQuestions = questions.length;
    this.score = 0;
    this.currentQuestion = 0;

    document
      .getElementById("next")
      .addEventListener("click", this.nextQuestion.bind(this));
    $("#tryBtn").click(() => {
      $("#finish").fadeOut(500, () => {
        $("#setting").fadeIn(500);
      });
    });

    this.showQuestion();
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  showQuestion() {
    document.getElementById("question").innerHTML =
      this.questions[this.currentQuestion].question;
    document.getElementById("currentQuestion").innerHTML =
      this.currentQuestion + 1;
    document.getElementById("totalNumberOfQuestions").innerHTML =
      this.numOfQuestions;

    let answers = [
      this.questions[this.currentQuestion].correct_answer,
      ...this.questions[this.currentQuestion].incorrect_answers,
    ];
    console.log(answers);
    this.shuffle(answers);
    console.log(answers);

    let answerRow = "";
    for (let i = 0; i < answers.length; i++) {
      answerRow += `<label class="form-check-label d-block">
            <input type="radio" class="form-check-input" name="answer" id="easy" value="${answers[i]}"
                >
                ${answers[i]}
        </label>`;
    }
    document.getElementById("rowAnswer").innerHTML = answerRow;
    console.log(this.questions);
  }

  nextQuestion() {
    let userAnswer = Array.from(document.getElementsByName("answer")).filter(
      (el) => el.checked
    )[0].value;
    let correctAnswer = this.questions[this.currentQuestion].correct_answer;
    this.checkUserAnswer(correctAnswer, userAnswer);
    this.currentQuestion++;
    if (this.numOfQuestions > this.currentQuestion) {
      this.showQuestion();
    } else {
      $("#score").text(this.score);
      $("#quiz").fadeOut(500, () => {
        $("#finish").fadeIn(500);
      }); 
    }
  }

  checkUserAnswer(correctAnswer, userAnswer) {
    if (correctAnswer == userAnswer) {
      this.score++;
      $("#Correct").fadeIn(500).fadeOut(500);
    } else {
      $("#inCorrect").fadeIn(500).fadeOut(500);
    }
  }
}
