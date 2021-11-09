const timerEl = document.querySelector(".timer");
const buttonStart = document.querySelector(".button-start");
const fiveMinutes = 60 * 1;
const quiz = document.querySelector(".quiz");
const buttonConteiner = document.querySelector(".button_conteiner-start");
const quizBoxStarter = document.querySelector(".quiz_box_starter");
const quizBoxQuestions = document.querySelector(".quiz_box_questions");
const quizQuestions = document.querySelector(".quiz_questions");
const buttonanswer1 = document.querySelector(".buttonanswer1");
const buttonanswer2 = document.querySelector(".buttonanswer2");
const buttonanswer3 = document.querySelector(".buttonanswer3");
const buttonanswer4 = document.querySelector(".buttonanswer4");
const answerStatus = document.querySelector(".status");
const finishPage = document.querySelector(".result");
const highScores = document.querySelector(".highscores");
const finalScore = document.querySelector(".result-score");
const inputInfo = document.querySelector(".input-info");
const submitButton = document.querySelector(".submit-button");
const backButton = document.querySelector(".back-button");
const clearButton = document.querySelector(".clear-button");
const tableContainer = document.querySelector(".table-body");
const viewHighScores = document.querySelector(".scores");
var currentOrder = 0;
var currentCard;
var score = 0;
var timerId;
var timer;

buttonanswer1.onclick = (e) => correctAnswer(e);
buttonanswer2.onclick = (e) => correctAnswer(e);
buttonanswer3.onclick = (e) => correctAnswer(e);
buttonanswer4.onclick = (e) => correctAnswer(e);
const data = [
    {
        question: "Commonly used data types Do Not Include:",
        button1: "1. Strings",
        button2: "2. Booleans",
        button3: "3. Alerts",
        button4: "4. Numbers",
        answer: "2. Booleans",
        order: 0
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        button1: "1. Quotes",
        button2: "2. Curly brackets",
        button3: "3. Parenthesis",
        button4: "4. Square brackets",
        answer: "3. Parenthesis",
        order: 1
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        button1: "1. Numbers and Strings",
        button2: "2. Other arrays",
        button3: "3. Booleans",
        button4: "4. All of the above",
        answer: "4. All of the above",
        order: 2
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        button1: "1. Commas",
        button2: "2. Curly brackets",
        button3: "3. Quotes",
        button4: "4. Parenthesis",
        answer: "2. Curly brackets",
        order: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        button1: "1. JavaScript",
        button2: "2. Terminal/Bash",
        button3: "3. For loops",
        button4: "4. Consol.log",
        answer: "4. Consol.log",
        order: 4
    }
];

function startTimer(duration, display) {
    timer = duration;
    var minutes;
    var seconds;
    
    timerId = setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        display.style.fontSize = "15px";
        if (--timer < 0) {
            timer = duration;
            timeFinished();
        }
    }, 1000);
};

function timeFinished() {
    clearInterval(timerId);
    timerEl.innerHTML = "<h1>Timer</h1>";
    quizBoxStarter.style.display = "none";
    quizBoxQuestions.style.display = "none";
    finishPage.style.display = "block";
    highScores.style.display = "none";
    finalScore.innerHTML = score;
};

buttonStart.onclick = () => {
    startTimer(fiveMinutes, timerEl);
    quizBoxStarter.style.display = "none";
    quizBoxQuestions.style.display = "block";
    currentCard = data[0];
    showQuiz(data, 0);
};

function showQuiz(cards, order) {
    const card = cards.find(item => item.order === order);

    quizQuestions.innerHTML = card.question;
    buttonanswer1.innerHTML = card.button1;
    buttonanswer2.innerHTML = card.button2;
    buttonanswer3.innerHTML = card.button3;
    buttonanswer4.innerHTML = card.button4;
};

function correctAnswer(e) {
    const clickText = e.target.innerHTML;

    if (clickText === currentCard.answer) {
        score++;
        answerStatus.innerHTML = "Correct";
        answerStatus.style.backgroundColor = "cadetblue";
        answerStatus.style.borderRadius = "12px";
        answerStatus.style.padding = "16px";
        answerStatus.style.marginTop = "40px";
        answerStatus.style.width = "100px";
    } else {
        answerStatus.innerHTML = "Wrong";
        answerStatus.style.backgroundColor = "cadetblue";
        answerStatus.style.borderRadius = "12px";
        answerStatus.style.padding = "16px";
        answerStatus.style.marginTop = "40px";
        answerStatus.style.width = "100px";
        timer = timer - 12;
    }
    answerStatus.style.display = "block";
    setTimeout(() => answerStatus.style.display = "none", 2000);
    currentOrder++;
    
    const lengthData = data.length;

    if (currentOrder < lengthData) {
        currentCard = data[currentOrder];
        showQuiz(data, currentOrder);
    } else {
        finishPage.style.display = "block";
        quizBoxStarter.style.display = "none";
        highScores.style.display = "none";
        quizBoxQuestions.style.display = "none";
        currentOrder = 0;
        currentCard = data[currentCard];
        finalScore.innerHTML = score;
        clearInterval(timerId);
        timerEl.innerHTML = "<h1>Timer</h1>";
    }
};

submitButton.onclick = () => {
    const value = inputInfo.value;
    const newLine = document.createElement("tr");
    const newName = document.createElement("td");
    const newScore = document.createElement("td"); 
    
    newName.innerHTML = value;
    newScore.innerHTML = score;

    newLine.classList.add("table-body");
    newLine.append(newName);
    newLine.append(newScore);
    tableContainer.append(newLine);

    console.log(value);
    score = 0;

    quizBoxStarter.style.display = "none";
    quizBoxQuestions.style.display = "none";
    finishPage.style.display = "none";
    highScores.style.display = "block";

};

backButton.onclick = () => {
    quizBoxStarter.style.display = "block";
    quizBoxQuestions.style.display = "none";
    finishPage.style.display = "none";
    highScores.style.display = "none";
};

clearButton.onclick = () => {
    tableContainer.innerHTML = ""
};

viewHighScores.onclick = () => {
    quizBoxStarter.style.display = "none";
    quizBoxQuestions.style.display = "none";
    finishPage.style.display = "none";
    highScores.style.display = "block";
}