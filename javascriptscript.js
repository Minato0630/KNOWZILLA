const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    

    // Continue adding questions until you reach 100
    // ...
   {
    "question": "1) Which keyword is used to declare a constant variable in JavaScript?",
    "options": ["const", "var", "let", "static"],
    "answer": "const"
  },
  {
    "question": "2) Which symbol is used for single-line comments in JavaScript?",
    "options": ["//", "/*", "#", "--"],
    "answer": "//"
  },
  {
    "question": "3) Which method is used to convert a string to an integer in JavaScript?",
    "options": ["parseInt()", "toInteger()", "parseFloat()", "Number()"],
    "answer": "parseInt()"
  },
  {
    "question": "4) Which function is used to print something in the browser console?",
    "options": ["print()", "console.log()", "log()", "display()"],
    "answer": "console.log()"
  },
  {
    "question": "5) Which operator is used for strict equality comparison?",
    "options": ["==", "===", "!=", "!=="],
    "answer": "==="
  },
  {
    "question": "6) Which keyword is used to define a function in JavaScript?",
    "options": ["function", "def", "fn", "define"],
    "answer": "function"
  },
  {
    "question": "7) Which event is triggered when a user clicks on an HTML element?",
    "options": ["onhover", "onclick", "onpress", "onchange"],
    "answer": "onclick"
  },
  {
    "question": "8) Which function is used to convert a JSON string into a JavaScript object?",
    "options": ["JSON.parse()", "JSON.stringify()", "parseJSON()", "objectify()"],
    "answer": "JSON.parse()"
  },
  {
    "question": "9) Which JavaScript keyword is used to declare a variable?",
    "options": ["var", "let", "const", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "10) Which built-in method removes the last element from an array and returns it?",
    "options": ["pop()", "push()", "shift()", "unshift()"],
    "answer": "pop()"
  },
  {
    "question": "11) Which of the following is a valid way to define an arrow function?",
    "options": ["()=>{}", "function() => {}", "()=>[]", "{}=>()"],
    "answer": "()=>{}"
  },
  {
    "question": "12) Which function is used to execute a function after a specified time?",
    "options": ["setTimeout()", "setInterval()", "wait()", "delay()"],
    "answer": "setTimeout()"
  },
  {
    "question": "13) Which method is used to join two or more arrays?",
    "options": ["concat()", "merge()", "combine()", "join()"],
    "answer": "concat()"
  },
  {
    "question": "14) Which of the following is a falsy value in JavaScript?",
    "options": ["0", "null", "undefined", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "15) Which JavaScript method converts an array into a string?",
    "options": ["toString()", "stringify()", "join()", "convert()"],
    "answer": "toString()"
  },
  {
    "question": "16) Which JavaScript object is used to store multiple key-value pairs?",
    "options": ["Array", "Object", "Set", "Map"],
    "answer": "Object"
  },
  {
    "question": "17) What is the default return value of a function in JavaScript if no return statement is used?",
    "options": ["null", "0", "undefined", "false"],
    "answer": "undefined"
  },
  {
    "question": "18) Which keyword is used to handle errors in JavaScript?",
    "options": ["try", "catch", "throw", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "19) Which JavaScript method is used to add a new element at the end of an array?",
    "options": ["push()", "pop()", "shift()", "unshift()"],
    "answer": "push()"
  },
  {
    "question": "20) Which of the following is not a valid JavaScript data type?",
    "options": ["Number", "String", "Boolean", "Character"],
    "answer": "Character"
  },
  {
    "question": "21) Which of the following loops is not available in JavaScript?",
    "options": ["for", "while", "do-while", "foreach"],
    "answer": "foreach"
  },
  {
    "question": "22) Which method is used to find the length of a string in JavaScript?",
    "options": ["size()", "length()", "count()", "getSize()"],
    "answer": "length()"
  },
  {
    "question": "23) Which method can be used to remove whitespace from both ends of a string?",
    "options": ["trim()", "strip()", "remove()", "clear()"],
    "answer": "trim()"
  },
  {
    "question": "24) Which JavaScript operator is used to assign a value?",
    "options": ["=", "==", "===", "!="],
    "answer": "="
  },
  {
    "question": "25) Which statement is used to exit a loop in JavaScript?",
    "options": ["break", "exit", "stop", "return"],
    "answer": "break"
  },
  {
    "question": "26) Which JavaScript function can be used to find the largest number in an array?",
    "options": ["Math.max()", "max()", "Array.max()", "largest()"],
    "answer": "Math.max()"
  },
  {
    "question": "27) Which method can be used to check if a string contains a specific substring?",
    "options": ["includes()", "contains()", "find()", "search()"],
    "answer": "includes()"
  },
  {
    "question": "28) Which keyword is used to create a class in JavaScript?",
    "options": ["class", "constructor", "function", "define"],
    "answer": "class"
  },
  {
    "question": "29) Which operator is used to concatenate two strings in JavaScript?",
    "options": ["+", "&", "|", "*"],
    "answer": "+"
  },
  {
    "question": "30) Which function can be used to check if a variable is an array?",
    "options": ["Array.isArray()", "isArray()", "checkArray()", "typeof"],
    "answer": "Array.isArray()"
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
    window.location.href = 'javascriptresults.html';
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
            <button id="home-button" onclick="window.location.href='javascript.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('javascriptresults.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}