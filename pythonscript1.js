const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    

    // Continue adding questions until you reach 100
    // ...
    
        {
          "question": "1) What will be the output of the following Python program?",
          "code": "x = 10\nprint(x)",
          "options": ["10", "Error", "None of the above", "10.0"],
          "answer": "10"
        },
        {
          "question": "2) What will be the output of the following Python program?",
          "code": "x = 5\nprint(x + 5)",
          "options": ["10", "5", "Error", "None of the above"],
          "answer": "10"
        },
        {
          "question": "3) What will be the output of the following Python program?",
          "code": "x = 5\nprint(x * 2)",
          "options": ["10", "5", "Error", "None of the above"],
          "answer": "10"
        },
        {
          "question": "4) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x + ' World!')",
          "options": ["Hello World!", "HelloWorld!", "Error", "None of the above"],
          "answer": "Hello World!"
        },
        {
          "question": "5) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(len(x))",
          "options": ["3", "2", "Error", "None of the above"],
          "answer": "3"
        },
        {
          "question": "6) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x[1])",
          "options": ["2", "1", "Error", "None of the above"],
          "answer": "2"
        },
        {
          "question": "7) What will be the output of the following Python program?",
          "code": "x = (1, 2, 3)\nprint(x[0])",
          "options": ["1", "2", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "8) What will be the output of the following Python program?",
          "code": "x = {'a': 1, 'b': 2}\nprint(x['a'])",
          "options": ["1", "2", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "9) What will be the output of the following Python program?",
          "code": "x = 5\nif x > 0:\n    print('Positive')\nelse:\n    print('Negative')",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Positive"
        },
        {
          "question": "10) What will be the output of the following Python program?",
          "code": "x = -5\nif x > 0:\n    print('Positive')\nelse:\n    print('Negative')",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Negative"
        },
        {
          "question": "11) What will be the output of the following Python program?",
          "code": "for i in range(3):\n    print(i)",
          "options": ["0\n1\n2", "0\n1\n2\n3", "Error", "None of the above"],
          "answer": "0\n1\n2"
        },
        {
          "question": "12) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x[1:])",
          "options": ["[2, 3]", "[1, 2, 3]", "Error", "None of the above"],
          "answer": "[2, 3]"
        },
        {
          "question": "13) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nx.append(4)\nprint(x)",
          "options":[ "[1, 2, 3, 4]", "[1, 2, 3]", "Error", "None of the above"],
          "answer": "[1, 2, 3, 4]"
        },
        {
          "question": "14) What will be the output of the following Python program?",
          "code": "x = 'Python'\nprint(x[0:2 ])",
          "options": ["Py", "Python", "Error", "None of the above"],
          "answer": "Py"
        },
        {
          "question": "15) What will be the output of the following Python program?",
          "code": "x = 'Python'\nprint(x[-1])",
          "options": ["n", "P", "Error", "None of the above"],
          "answer": "n"
        },
        {
          "question": "16) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x.upper())",
          "options": ["HELLO", "Hello", "Error", "None of the above"],
          "answer": "HELLO"
        },
        {
          "question": "17) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x.lower())",
          "options": ["hello", "Hello", "Error", "None of the above"],
          "answer": "hello"
        },
        {
          "question": "18) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x.replace('H', 'J'))",
          "options": ["Jello", "Hello", "Error", "None of the above"],
          "answer": "Jello"
        },
        {
          "question": "19) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(sum(x))",
          "options": ["6", "Error", "None of the above", "5"],
          "answer": "6"
        },
        {
          "question": "20) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(max(x))",
          "options": ["3", "Error", "None of the above", "2"],
          "answer": "3"
        },
        {
          "question": "21) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(min(x))",
          "options": ["1", "Error", "None of the above", "2"],
          "answer": "1"
        },
        {
          "question": "22) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x.count(2))",
          "options": ["1", "2", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "23) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x.index(3))",
          "options": ["2", "1", "Error", "None of the above"],
          "answer": "2"
        },
        {
          "question": "24) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x.pop())",
          "options": ["3", "Error", "None of the above", "2"],
          "answer": "3"
        },
        {
          "question": "25) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nx.remove(2)\nprint(x)",
          "options": ["[1, 3]", "[1, 2, 3]", "Error", "None of the above"],
          "answer": "[1, 3]"
        },
        {
          "question": "26) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nx.insert(1, 4)\nprint(x)",
          "options": ["[1, 4, 2, 3]", "[1, 2, 3]", "Error", "None of the above"],
          "answer": "[1, 4, 2, 3]"
        },
        {
          "question": "27) What will be the output of the following Python program?",
          "code": "x = [1, 2, 3]\nprint(x[::-1])",
          "options": ["[3, 2, 1]", "[1, 2, 3]", "Error", "None of the above]"],
          "answer": "[3, 2, 1]"
        },
        {
          "question": "28) What will be the output of the following Python program?",
          "code": "x = 'Hello '\nprint(x.split('o'))",
          "options": ["[\"Hell\", \"\"]", "[\"Hello\"]", "Error", "None of the above"],
          "answer": "[\"Hell\", \"\"]"
        },
        {
          "question": "29) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x.find('e'))",
          "options": ["1", "-1", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "30) What will be the output of the following Python program?",
          "code": "x = 'Hello'\nprint(x.startswith('H'))",
          "options": ["True", "False", "Error", "None of the above"],
          "answer": "True"
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
    window.location.href = 'pythonresults1.html';
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
            <button id="home-button" onclick="window.location.href='python.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('pythonresults1.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}