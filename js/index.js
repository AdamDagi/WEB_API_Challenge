const timer = document.querySelector(".timer");
const buttonStart = document.querySelector(".button-start");
const fiveMinutes = 60 * 1;
const quiz = document.querySelector(".quiz");
const buttonConteiner = document.querySelector(".button_conteiner-start");
const quizBoxStarter = document.querySelector(".quiz_box_starter");
const quizBoxQuestions = document.querySelector(".quiz_box_questions");
const data = [
    {
        question: "Question1",
        button1: "Answer1",
        button2: "Answer2",
        button3: "Answer3",
        button4: "Answer4",
        answer: "right answer",
        order: 1
    },
    {
        question: "Question1",
        button1: "Answer1",
        button2: "Answer2",
        button3: "Answer3",
        button4: "Answer4",
        answer: "right answer",
        order: 2
    },
    {
        question: "Question1",
        button1: "Answer1",
        button2: "Answer2",
        button3: "Answer3",
        button4: "Answer4",
        answer: "right answer",
        order: 3
    },
    {
        question: "Question1",
        button1: "Answer1",
        button2: "Answer2",
        button3: "Answer3",
        button4: "Answer4",
        answer: "right answer",
        order: 4
    }
];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        display.style.fontSize = "15px";
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

buttonStart.onclick = () => {
    startTimer(fiveMinutes, timer);
    quizBoxStarter.style.display = "none";
    quizBoxQuestions.style.display = "block";
};

