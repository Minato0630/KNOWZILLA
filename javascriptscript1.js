const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    

    // Continue adding questions until you reach 100
    // ...
    
      {
        "question": "1) What will be the output of the following JavaScript code?",
        "code": "console.log(10 + 5);",
        "options": ["15", "105", "Error", "None of the above"],
        "answer": "15"
      },
      {
        "question": "2) What will be the output of the following JavaScript code?",
        "code": "console.log(typeof 'Hello');",
        "options": ["string", "String", "error", "undefined"],
        "answer": "string"
      },
      {
        "question": "3) What will be the output of the following JavaScript code?",
        "code": "console.log(5 == '5');",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "true"
      },
      {
        "question": "4) What will be the output of the following JavaScript code?",
        "code": "console.log(5 === '5');",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "false"
      },
      {
        "question": "5) What will be the output of the following JavaScript code?",
        "code": "console.log(5 + '5');",
        "options": ["55", "10", "Error", "None of the above"],
        "answer": "55"
      },
      {
        "question": "6) What will be the output of the following JavaScript code?",
        "code": "console.log(5 * '2');",
        "options": ["10", "52", "Error", "None of the above"],
        "answer": "10"
      },
      {
        "question": "7) What will be the output of the following JavaScript code?",
        "code": "console.log(5 - '2');",
        "options": ["3", "52", "Error", "None of the above"],
        "answer": "3"
      },
      {
        "question": "8) What will be the output of the following JavaScript code?",
        "code": "console.log(5 + 2 + '3');",
        "options": ["73", "53", "Error", "None of the above"],
        "answer": "73"
      },
      {
        "question": "9) What will be the output of the following JavaScript code?",
        "code": "console.log(5 > 2 && 2 < 3);",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "true"
      },
      {
        "question": "10) What will be the output of the following JavaScript code?",
        "code": "console.log(5 > 2 || 2 > 3);",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "true"
      },
      {
        "question": "11) What will be the output of the following JavaScript code?",
        "code": "console.log(!true);",
        "options": ["false", "true", "Error", "None of the above"],
        "answer": "false"
      },
      {
        "question": "12) What will be the output of the following JavaScript code?",
        "code": "console.log(!!'');",
        "options": ["false", "true", "Error", "None of the above"],
        "answer": "false"
      },
      {
        "question": "13) What will be the output of the following JavaScript code?",
        "code": "console.log(!!'Hello');",
        "options": ["false", "true", "Error", "None of the above"],
        "answer": "true"
      },
      {
        "question": "14) What will be the output of the following JavaScript code?",
        "code": "console.log([1, 2] == '1,2');",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "true"
      },
      {
        "question": "15) What will be the output of the following JavaScript code?",
        "code": "console.log([1, 2] === '1,2');",
        "options": ["true", "false", "Error", "None of the above"],
        "answer": "false"
      },
      {
        "question": "16) What will be the output of the following JavaScript code?",
        "code": "console.log(typeof null);",
        "options": ["object", "null", "undefined", "Error", "None of the above"],
        "answer": "object"
      },
      {
        "question": "17) What will be the output of the following JavaScript code?",
        "code": "console.log(typeof undefined);",
        "options": ["undefined", "object", "Error", "None of the above"],
        "answer": "undefined"
      },
      {
        "question": "18) What will be the output of the following JavaScript code?",
        "code": "console.log(1 + '1' - 1);",
        "options": ["10", "1", "Error", "None of the above"],
        "answer": "1"
      },
      {
        "question": "19) What will be the output of the following JavaScript code?",
        "code": "console.log(1 + 2 + '3');",
        "options": ["33", "6", "Error", "None of the above"],
        "answer": "33"
      },
      {
        "question": "20) What will be the output of the following JavaScript code?",
        "code": "console.log(1 + 2 + 3 + '4');",
        "options": ["10", "6", "Error", "None of the above"],
        "answer": "64"
      },
      {
        "question": "21) What will be the output of the following JavaScript code?",
        "code": "console.log(5 % 2);",
        "options": ["1", "2", "Error", "None of the above"],
        "answer": "1"
      },
      {
        "question": "22) What will be the output of the following JavaScript code?",
        "code": "console.log(Math.max(1, 2, 3));",
        "options": ["3", "2", "Error", "None of the above"],
        "answer": "3"
      },
      {
        "question": "23) What will be the output of the following JavaScript code?",
        "code": "console.log(Math.min(1, 2, 3));",
        "options": ["1", "2", "Error", "None of the above"],
        "answer": "1"
      },
      {
        "question": "24) What will be the output of the following JavaScript code?",
        "code": "console.log('Hello'.charAt(0));",
        "options": ["H", "Error", "None of the above", "Hello"],
        "answer": "H"
      },
      {
        "question": "25) What will be the output of the following JavaScript code?",
        "code": "console.log('Hello'.toUpperCase());",
        "options": ["HELLO", "Hello", "Error", "None of the above"],
        "answer": "HELLO"
      },
      {
        "question": "26) What will be the output of the following JavaScript code?",
        "code": "console.log('Hello'.length);",
        "options": ["5", "Error", "None of the above", "Hello"],
        "answer": "5"
      },
      {
        "question": "27) What will be the output of the following JavaScript code?",
        "code": "console.log([1, 2, 3].length);",
        "options": ["3", "Error", "None of the above", "2"],
        "answer": "3"
      },
      {
        "question": "28) What will be the output of the following JavaScript code?",
        "code": "console.log([1, 2, 3].push(4));",
        "options": ["4", "3", "Error", "None of the above"],
        "answer": "4"
      },
      {
        "question": "29) What will be the output of the following JavaScript code?",
        "code": "console.log([1, 2, 3].pop());",
        "options": ["3", "Error", "None of the above", "2"],
        "answer": "3"
      },
      {
        "question": "30) What will be the output of the following JavaScript code?",
        "code": "console.log(typeof [1, 2, 3]);",
        "options": ["object", "array", "Error", "None of the above"],
        "answer": "object"
      }
    ]

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
            <pre class="code-block">${currentQuestion.code}</pre>
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
    window.location.href = 'javascriptresults1.html';
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
if (window.location.pathname.endsWith('javascriptresults1.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}