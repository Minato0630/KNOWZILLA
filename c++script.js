const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    
    // Continue adding questions until you reach 100
    // ...
    { "question": "1) hich keyword is used to define a constant variable in C++?", "options": ["const", "final", "static", "mutable"], "answer": "const" },

  { "question": "2) Which operator is used to allocate memory dynamically in C++?", "options": ["malloc", "calloc", "new", "alloc"], "answer": "new" },

  { "question": "3) Which keyword is used to inherit a class in C++?", "options": ["extends", "inherits", "derived", "public"], "answer": "public" },

  { "question": "4) Which of the following is NOT a valid access specifier in C++?", "options": ["public", "protected", "private", "secured"], "answer": "secured" },

  { "question": "5) Which of the following is used to terminate a loop or switch statement in C++?", "options": ["exit", "stop", "break", "terminate"], "answer": "break" },

  { "question": "6) Which of the following is the correct way to define a class in C++?", "options": ["class MyClass {}", "class MyClass;", "class MyClass { };", "MyClass: class {}"], "answer": "class MyClass { };" },

  { "question": "7) Which header file is used for input and output operations in C++?", "options": ["stdio.h", "stdlib.h", "iostream", "fstream"], "answer": "iostream" },

  { "question": "8) Which function is called automatically when an object is created in C++?", "options": ["Destructor", "Constructor", "Operator", "Instantiator"], "answer": "Constructor" },

  { "question": "9) Which operator is used to access members of a class using a pointer?", "options": [".", "->", ":", "::"], "answer": "->" },

  { "question": "10) Which concept allows multiple functions with the same name but different parameters?", "options": ["Encapsulation", "Polymorphism", "Overloading", "Inheritance"], "answer": "Overloading" },

  { "question": "11) Which keyword is used to define an abstract class in C++?", "options": ["abstract", "virtual", "override", "interface"], "answer": "virtual" },

  { "question": "12) Which operator is used to deallocate dynamically allocated memory in C++?", "options": ["free", "delete", "remove", "clear"], "answer": "delete" },

  { "question": "13) Which of the following allows defining a function outside the class using scope resolution?", "options": ["->", "::", ":", "."], "answer": "::" },

  { "question": "14) Which type of function cannot be overloaded in C++?", "options": ["Member function", "Static function", "Virtual function", "Main function"], "answer": "Main function" },

  { "question": "15) Which of the following is used to handle exceptions in C++?", "options": ["catch", "throw", "try", "All of the above"], "answer": "All of the above" },

  { "question": "16) Which type of inheritance is NOT supported by C++?", "options": ["Multiple", "Multilevel", "Hierarchical", "None"], "answer": "None" },

  { "question": "17) Which of the following is NOT a valid variable name in C++?", "options": ["_var", "123var", "var_123", "varName"], "answer": "123var" },

  { "question": "18) Which data structure is used in C++ Standard Template Library (STL) for dynamic arrays?", "options": ["Vector", "Array", "List", "Stack"], "answer": "Vector" },

  { "question": "19) Which keyword is used to prevent a function from being overridden in derived classes?", "options": ["static", "final", "override", "const"], "answer": "final" },

  { "question": "20) Which of the following is NOT a feature of object-oriented programming in C++?", "options": ["Encapsulation", "Polymorphism", "Pointers", "Abstraction"], "answer": "Pointers" },

  { "question": "21) Which loop is guaranteed to execute at least once?", "options": ["for", "while", "do-while", "foreach"], "answer": "do-while" },

  { "question": "22) Which keyword is used to refer to the current instance of a class?", "options": ["self", "current", "this", "object"], "answer": "this" },

  { "question": "23) Which of the following is the correct syntax to declare a pointer in C++?", "options": ["int ptr;", "int *ptr;", "ptr *int;", "pointer<int> ptr;"], "answer": "int *ptr;" },

  { "question": "24) Which of the following is NOT a valid loop statement in C++?", "options": ["for", "while", "foreach", "do-while"], "answer": "foreach" },

  { "question": "25) Which of the following is used to read a single character from input in C++?", "options": ["cin >>", "cin.get()", "getchar()", "All of the above"], "answer": "All of the above" },

  { "question": "26) Which of the following is NOT a valid type of constructor in C++?", "options": ["Default constructor", "Parameterized constructor", "Copy constructor", "Virtual constructor"], "answer": "Virtual constructor" },

  { "question": "27) Which keyword is used to define a structure in C++?", "options": ["struct", "class", "typedef", "union"], "answer": "struct" },

  { "question": "28) Which of the following is used to include header files in C++?", "options": ["#import", "#include", "#define", "#use"], "answer": "#include" },

  { "question": "29) Which of the following operators is used for dereferencing a pointer?", "options": ["*", "&", "->", "::"], "answer": "*" },

  { "question": "30) Which of the following is the correct syntax for a function returning a reference?", "options": ["int &func();", "int func&();", "&int func();", "int *func();"], "answer": "int &func();" }

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
    window.location.href = 'c++results.html';
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
if (window.location.pathname.endsWith('c++results.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}