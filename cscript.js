const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
        // Continue adding questions until you reach 100
    // ...
    {
    "question": "1) Which keyword is used to define a constant variable in C?",
    "options": ["const", "final", "static", "volatile"],
    "answer": "const"
  },
{
    "question": "2) Which operator is used to access the value at the address stored in a pointer?",
    "options": ["&", "*", "->", "."],
    "answer": "*"
  },
{
    "question": "3) Which function is used to allocate memory dynamically in C?",
    "options": ["malloc", "alloc", "new", "memalloc"],
    "answer": "malloc"
  },
{
    "question": "4) What is the default return type of a function in C if not specified?",
    "options": ["void", "int", "float", "double"],
    "answer": "int"
  },
{
    "question": "5) Which header file is required for using printf() and scanf() functions?",
    "options": ["stdio.h", "stdlib.h", "conio.h", "string.h"],
    "answer": "stdio.h"
  },
{
    "question": "6) Which loop is guaranteed to execute at least once?",
    "options": ["for", "while", "do-while", "if"],
    "answer": "do-while"
  },
{
    "question": "7) Which data type is used to store a single character in C?",
    "options": ["char", "int", "float", "double"],
    "answer": "char"
  },
  {
    "question": "8) What is the size of the int data type (in bytes) in C (on most systems)?",
    "options": ["2", "4", "8", "1"],
    "answer": "4"
  },
  {
    "question": "9) Which symbol is used to denote a preprocessor directive?",
    "options": ["$", "#", "&", "*"],
    "answer": "#"
  },
  {
    "question": "10) Which function is used to read a string from the user?",
    "options": ["gets", "scanf", "printf", "puts"],
    "answer": "gets"
  },
  {
    "question": "11) Which function is used to compare two strings in C?",
    "options": ["strcmp", "strcomp", "strcompare", "strncmp"],
    "answer": "strcmp"
  },
  {
    "question": "12) Which keyword is used to define a structure in C?",
    "options": ["struct", "class", "record", "object"],
    "answer": "struct"
  },
  {
    "question": "13) Which keyword is used to exit from a loop prematurely?",
    "options": ["break", "continue", "return", "exit"],
    "answer": "break"
  },
  {
    "question": "14) Which operator is used to access the members of a structure using a pointer?",
    "options": ["->", ".", "&", "*"],
    "answer": "->"
  },
  {
    "question": "15) Which keyword is used to define an enumeration in C?",
    "options": ["enum", "enumerate", "enumtype", "enumset"],
    "answer": "enum"
  },
  {
    "question": "16) Which header file is required for memory allocation functions like malloc and free?",
    "options": ["stdlib.h", "stdio.h", "conio.h", "memory.h"],
    "answer": "stdlib.h"
  },
  {
    "question": "17) Which function is used to terminate a program in C?",
    "options": ["exit", "break", "terminate", "quit"],
    "answer": "exit"
  },
  {
    "question": "18) What is the output of sizeof(char) in C?",
    "options": ["1", "2", "4", "8"],
    "answer": "1"
  },
  {
    "question": "19) Which function is used to copy one string to another?",
    "options": ["strcpy", "strcat", "strcopy", "strmove"],
    "answer": "strcpy"
  },
  {
    "question": "20) Which loop is best suited when the number of iterations is known?",
    "options": ["for", "while", "do-while", "switch"],
    "answer": "for"
  },
  {
    "question": "21) What is the default value of a global integer variable in C?",
    "options": ["0", "1", "garbage value", "undefined"],
    "answer": "0"
  },
  {
    "question": "22) Which operator is used for bitwise AND in C?",
    "options": ["&", "|", "^", "&&"],
    "answer": "&"
  },
  {
    "question": "23) Which function is used to find the length of a string in C?",
    "options": ["strlen", "strlength", "size", "count"],
    "answer": "strlen"
  },
  {
    "question": "24) Which keyword is used to define a macro in C?",
    "options": ["#define", "#macro", "#include", "#ifdef"],
    "answer": "#define"
  },
  {
    "question": "25) Which function is used to open a file in C?",
    "options": ["fopen", "open", "file_open", "fopenfile"],
    "answer": "fopen"
  },
  {
    "question": "26) Which storage class makes a variable retain its value between function calls?",
    "options": ["static", "register", "extern", "auto"],
    "answer": "static"
  },
  {
    "question": "27) Which function is used to close a file in C?",
    "options": ["fclose", "close", "fileclose", "endfile"],
    "answer": "fclose"
  },
  {
    "question": "28) Which function is used to write formatted output to a file?",
    "options": ["fprintf", "printf", "write", "fwrite"],
    "answer": "fprintf"
  },
  {
    "question": "29) Which function is used to read a single character from a file?",
    "options": ["fgetc", "getc", "readchar", "fileget"],
    "answer": "fgetc"
  },
{
  "question": "30) Which header file is required to use the pow() function in C?",
  "options": ["math.h", "stdlib.h", "stdio.h", "string.h"],
  "answer": "math.h"
}

    // Add more questions until you reach 100
];

function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const options = [];

        for (let i = 0; i < currentQuestion.options.length; i++) {
            options.push(
                `<label class="option">
                    <input type="radio" name="question${questionNumber}" value="${currentQuestion.options[i]}">
                    ${currentQuestion.options[i]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="options"> ${options.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let numCorrect = 0;
    let numWrong = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
        } else {
            numWrong++;
        }
    });

    const totalQuestions = questions.length;
    const percentage = ((numCorrect / totalQuestions) * 100).toFixed(2);

    // Store results in session storage
    sessionStorage.setItem('quizResults', JSON.stringify({
        numCorrect,
        numWrong,
        totalQuestions,
        percentage
    }));

    // Redirect to results page
    window.location.href = 'cresults.html';
}

function displayResults() {
    const resultsContainer = document.getElementById('results');
    const results = JSON.parse(sessionStorage.getItem('quizResults'));

    if (results) {
        resultsContainer.innerHTML = `
            <div id="scorecard">
                <h2>Quiz Results</h2>
                <p class="correct">Correct Answers: ${results.numCorrect}</p>
                <p class="wrong">Wrong Answers: ${results.numWrong}</p>
                <p>Total Questions: ${results.totalQuestions}</p>
                <p class="percentage">Percentage: ${results.percentage}%</p>
            </div>
            <button id="home-button" onclick="window.location.href='C.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('cresults.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}