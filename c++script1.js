const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    
    // Continue adding questions until you reach 100
    // ...
    
        {
          "question": "1) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 10;\n    cout << x;\n    return 0;\n}",
          "options": ["10", "Address of x", "Garbage Value", "Compilation Error"],
          "answer": "10"
        },
        {
          "question": "2) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << x++;\n    return 0;\n}",
          "options": ["5", "6", "Error", "None of the above"],
          "answer": "5"
        },
        {
          "question": "3) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    cout << ++x;\n    return 0;\n}",
          "options": ["5", "6", "Error", "None of the above"],
          "answer": "6"
        },
        {
          "question": "4) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10;\n    cout << a * b;\n    return 0;\n}",
          "options": ["50", "15", "Error", "None of the above"],
          "answer": "50"
        },
        {
          "question": "5) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    a += 10;\n    cout << a;\n    return 0;\n}",
          "options": ["15", "5", "10", "Error"],
          "answer": "15"
        },
        {
          "question": "6) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << a / 2;\n    return 0;\n}",
          "options": ["2", "2.5", "Error", "None of the above"],
          "answer": "2"
        },
        {
          "question": "7) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << a % 2;\n    return 0;\n}",
          "options": ["1", "0", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "8) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10;\n    cout << (a < b);\n    return 0;\n}",
          "options": ["1", "0", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "9) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10;\n    cout << (a > b);\n    return 0;\n}",
          "options": ["1", "0", "Error", "None of the above"],
          "answer": "0"
        },
        {
          "question": "10) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    if (a > 0) {\n        cout << \"Positive\";\n    } else {\n        cout << \"Negative\";\n    }\n    return 0;\n}",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Positive"
        },
        {
          "question": "11) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = -5;\n    if (a > 0) {\n        cout << \"Positive\";\n    } else {\n        cout << \"Negative\";\n    }\n    return 0;\n}",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Negative"
        },
        {
          "question": "12) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    switch (a) {\n        case 5:\n            cout << \"Five\";\n            break;\n        default:\n            cout << \"Not Five\";\n    }\n    return 0;\n}",
          "options": ["Five", "Not Five", "Error", "None of the above"],
          "answer": "Five"
        },
        {
          "question": "13) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    switch (a) {\n        case 6:\n            cout << \"Six\";\n            break;\n        default:\n            cout << \"Not Six\";\n    }\n    return 0;\n}",
          "options": ["Six", "Not Six", "Error", "None of the above"],
          "answer": "Not Six"
        },
        {
          "question": "14) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    while (a > 0) {\n        cout << a << \" \";\n        a--;\n    }\n    return 0;\n}",
          "options": ["5 4 3 2 1", "1 2 3 4 5", "Error", "None of the above"],
          "answer": "5 4 3 2 1"
        },
        {
          "question": "15) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    do {\n        cout << a << \" \";\n        a--;\n    } while (a > 0);\n    return 0;\n}",
          "options": ["5 4 3 2 1", "1 2 3 4 5", "Error", "None of the above"],
          "answer": "5 4 3 2 1"
        },
        {
          "question": "16) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << i << \" \";\n    }\n    return 0;\n}",
          "options": ["0 1 2 3 4", "1 2 3 4 5", "Error", "None of the above"],
          "answer": "0 1 2 3 4"
        },
        {
          "question": "17) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << a++ + ++a;\n    return 0;\n}",
          "options": ["12", "11", "Error", "None of the above"],
          "answer": "12"
        },
        {
          "question": "18) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << a-- + a--;\n    return 0;\n}",
          "options": ["9", "10", "Error", "None of the above"],
          "answer": "9"
        },
        {
          "question": "19) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << (a == 5);\n    return 0;\n}",
          "options": ["1", "0", "Error", "None of the above"],
          "answer": "1"
        },
        {
          " question": "20) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << (a & b);\n    return 0;\n}",
          "options": ["0", "5", "10", "15"],
          "answer": "0"
        },
        {
          "question": "21) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << (a | b);\n    return 0;\n}",
          "options": ["15", "5", "10", "0"],
          "answer": "15"
        },
        {
          "question": "22) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << (a ^ b);\n    return 0;\n}",
          "options": ["15", "5", "10", "0"],
          "answer": "15"
        },
        {
          "question": "23) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << (~a);\n    return 0;\n}",
          "options": ["-6", "5", "0", "Error"],
          "answer": "-6"
        },
        {
          "question": "24) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << (a << 1);\n    return 0;\n}",
          "options": ["10", "5", "20", "Error"],
          "answer": "10"
        },
        {
          "question": "25) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    cout << (a >> 1);\n    return 0;\n}",
          "options": ["2", "5", "10", "Error"],
          "answer": "2"
        },
        {
          "question": "26) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << ((a > b) ? a : b);\n    return 0;\n}",
          "options": ["5", "10", "Error", "None of the above"],
          "answer": "10"
        },
        {
          "question": "27) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << ((a < b) ? a : b);\n    return 0;\n}",
          "options": ["5", "10", "Error", "None of the above"],
          "answer": "5"
        },
        {
          "question": "28) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << (a + b * 2);\n    return 0;\n}",
          "options": ["25", "20", "15", "Error"],
          "answer": "25"
        },
        {
          "question": "29) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int b = 10;\n    cout << ((a + b) / 2);\n    return 0;\n}",
          "options": ["7", "5", "10", "15"],
          "answer": "7"
        },
        {
          "question": "30) What will be the output of the following C++ program?",
          "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\ int b = 10;\n    cout << (a * b);\n    return 0;\n}",
          "options": ["50", "15", "Error", "None of the above"],
          "answer": "50"
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
    window.location.href = 'c++results1.html';
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
            <button id="home-button" onclick="window.location.href='c++.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('c++results1.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}