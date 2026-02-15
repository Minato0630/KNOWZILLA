const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    

    // Continue adding questions until you reach 100
    // ...
   {"question": "1) Which keyword is used to define a function in Python?", 
     "options": ["func", "define", "def", "function"], 
     "answer": "def"},
    
    {"question": "2) Which data type is immutable in Python?", 
     "options": ["List", "Dictionary", "Set", "Tuple"], 
     "answer": "Tuple"},
    
    {"question": "3) Which symbol is used to comment a single line in Python?", 
     "options": ["//", "#", "/*", "--"], 
     "answer": "#"},

    {"question": "4) What is the output of 3 * 2 ** 3 in Python?", 
     "options": ["24", "18", "48", "9"], 
     "answer": "24"},
    
    {"question": "5) Which function is used to read user input in Python?", 
     "options": ["input()", "read()", "scan()", "get()"], 
     "answer": "input()"},
    
    {"question": "6) Which keyword is used to define a class in Python?", 
     "options": ["class", "Class", "define", "struct"], 
     "answer": "class"},
    
    {"question": "7) What will be the output of bool([]) in Python?", 
     "options": ["True", "False", "Error", "None"], 
     "answer": "False"},
    
    {"question": "8) Which of the following is a valid variable name in Python?", 
     "options": ["2var", "var_1", "@var", "var-2"], 
     "answer": "var_1"},
    
    {"question": "9) Which module is used to work with regular expressions in Python?", 
     "options": ["regex", "re", "regexp", "pyregex"], 
     "answer": "re"},
    
    {"question": "10) Which method is used to remove an item from a list?", 
     "options": ["remove()", "delete()", "discard()", "erase()"], 
     "answer": "remove()"},
    
    {"question": "11) Which of the following is not a Python data type?", 
     "options": ["int", "char", "list", "tuple"], 
     "answer": "char"},
    
    {"question": "12) What will be the output of type(3.14)?", 
     "options": ["int", "float", "double", "decimal"], 
     "answer": "float"},
    
    {"question": "13) Which function returns the length of a string in Python?", 
     "options": ["size()", "count()", "len()", "length()"], 
     "answer": "len()"},
    
    {"question": "14) What is the output of bool(0) in Python?", 
     "options": ["True", "False", "None", "Error"], 
     "answer": "False"},
    
    {"question": "15) Which operator is used to find the remainder of a division in Python?", 
     "options": ["/", "//", "%", "**"], 
     "answer": "%"},
    
    {"question": "16) Which function is used to open a file in Python?", 
     "options": ["open()", "file()", "read()", "load()"], 
     "answer": "open()"},
    
    {"question": "17) Which keyword is used to handle exceptions in Python?", 
     "options": ["catch", "except", "error", "try"], 
     "answer": "try"},
    
    {"question": "18) Which statement is used to exit a loop in Python?", 
     "options": ["exit", "break", "stop", "terminate"], 
     "answer": "break"},
    
    {"question": "19) What will be the output of print('Hello' + 3)?", 
     "options": ["Hello3", "Error", "Hello 3", "None"], 
     "answer": "Error"},
    
    {"question": "20) Which function is used to convert a string into an integer?", 
     "options": ["str()", "int()", "float()", "eval()"], 
     "answer": "int()"},
    
    {"question": "21) Which Python collection is unordered and mutable?", 
     "options": ["List", "Tuple", "Dictionary", "Set"], 
     "answer": "Set"},
    
    {"question": "22) Which keyword is used to define an anonymous function in Python?", 
     "options": ["lambda", "def", "func", "anonymous"], 
     "answer": "lambda"},
    
    {"question": "23) Which operator is used to compare two values in Python?", 
     "options": ["=", "==", "!=", "==="], 
     "answer": "=="},
    
    {"question": "24) What will be the output of print(bool('False'))?", 
     "options": ["True", "False", "Error", "None"], 
     "answer": "True"},
    
    {"question": "25) Which function is used to remove whitespace from both ends of a string?", 
     "options": ["strip()", "trim()", "clean()", "erase()"], 
     "answer": "strip()"},
    
    {"question": "26) Which data structure follows the Last In, First Out (LIFO) principle?", 
     "options": ["Queue", "List", "Stack", "Set"], 
     "answer": "Stack"},
    
    {"question": "27) Which module is used to generate random numbers in Python?", 
     "options": ["random", "rand", "numpy", "math"], 
     "answer": "random"},
    
    {"question": "28) Which keyword is used to create a generator in Python?", 
     "options": ["yield", "return", "generate", "func"], 
     "answer": "yield"},
    
    {"question": "29) What will be the output of print(2 == 2.0)?", 
     "options": ["True", "False", "Error", "None"], 
     "answer": "True"},
    
    {"question": "30) Which built-in function returns the absolute value of a number?", 
     "options": ["abs()", "absolute()", "fabs()", "val()"], 
     "answer": "abs()"},

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
    window.location.href = 'pythonresults.html';
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
if (window.location.pathname.endsWith('pythonresults.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}