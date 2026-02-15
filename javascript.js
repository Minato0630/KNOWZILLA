const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    { question: "1) Number of primitive data types in Java are?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "2) What is the size of float and double in java?", options: ["32 and 64", "32 and 32", "64 and 64", "64 and 32"], answer: "32 and 64" },
    { question: "3) What is the size of long variable?", options: ["8bit", "16bit", "32bit", "64bit"], answer: "64bit" },
    { question: "4) Static function can be accessed using null reference.", options: ["false", "true"], answer: "false" },
    { question: "5) Automatic type conversion is possible in which of the possible cases?", options: ["Byte to int", "int to long", "long to int", "short to int"], answer: "int to long" },
    // Add more questions up to 100
    { question: "6) What is the default value of a boolean variable in Java?", options: ["true", "false", "null", "0"], answer: "false" },
    { question: "7)Which of the following is not a Java feature?", options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"], answer: "Use of pointers" },
    { question: "8) What is the size of a char in Java?", options: ["8 bit", "16 bit", "32 bit", "64 bit"], answer: "16 bit" },
    { question: "9) Which keyword is used to prevent method overriding?", options: ["final", "static", "abstract", "native"], answer: "final" },
    { question: "10) Which of the following is a valid declaration of a char?", options: ["char ch = 'a';", "char ch = 'ab';", "char ch = \"a\";", "char ch = \"ab\";"], answer: "char ch = 'a';" },

    // Continue adding questions until you reach 100
    // ...
    { question: "11) What is the main method signature in Java?", options: ["public static void main(String args[])", "public void main(String args)", "static void main(String args[])", "void main(String args[])"], answer: "public static void main(String args[])" },
    { question: "12) Which of the following is a valid identifier in Java?", options: ["$myVar", "_myVar", "myVar", "All of the above"], answer: "All of the above" },
{ "question": "13) Which keyword is used to prevent method overriding?","options": ["final", "static", "abstract", "native"], "answer": "final" },
{"question": "14) Which data type is used to store a single character in Java?", "options": ["char", "String", "int", "byte"],"answer": "char"},
{ "question": "15) Which of the following is not a Java access modifier?","options": ["private", "protected", "public", "internal"],"answer": "internal"},
{"question": "16) Which of these is a wrapper class in Java?","options": ["Integer", "int", "float", "boolean"],"answer": "Integer"},
{"question": "17) What will be the default value of a boolean variable in Java?","options": ["true", "false", "null", "0"],"answer": "false"},
{"question": "18) Which keyword is used to define a constant in Java?","options": ["static", "final", "const", "constant"],"answer": "final"},
{"question": "19) Which of the following is not a primitive data type in Java?","options": ["int", "float", "String", "char"],"answer": "String"},
{"question": "20) Which method is called automatically when an object is created?","options": ["finalize", "constructor", "main", "static"],"answer": "constructor"},
{"question": "21) What is the size of an int variable in Java?","options": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],"answer": "4 bytes"},
{
    "question": "22) Which class is the superclass of all Java classes?",
    "options": ["Object", "String", "System", "Class"],
    "answer": "Object"
  },
{
    "question": "23) What is the default value of a reference variable in Java?",
    "options": ["0", "null", "undefined", "empty"],
    "answer": "null"
  },
{
    "question": "24) Which keyword is used to define an interface in Java?",
    "options": ["interface", "class", "implements", "abstract"],
    "answer": "interface"
  },
{
    "question": "25) Which keyword is used to inherit a class in Java?",
    "options": ["implements", "extends", "super", "inherit"],
    "answer": "extends"
  },
{
    "question": "26) Which method is used to start a thread in Java?",
    "options": ["start()", "run()", "execute()", "call()"],
    "answer": "start()"
  },
{
    "question": "27) Which exception is thrown when an array is accessed with an invalid index?",
    "options": ["ArrayIndexOutOfBoundsException", "NullPointerException", "ClassCastException", "ArithmeticException"],
    "answer": "ArrayIndexOutOfBoundsException"
  },

{
    "question": "28) Which package contains the Scanner class in Java?",
    "options": ["java.io", "java.util", "java.net", "java.lang"],
    "answer": "java.util"
  },
{
    "question": "29) Which operator is used for bitwise AND in Java?",
    "options": ["&", "|", "^", "&&"],
    "answer": "&"
  },

{
    "question": "30) Which function is used to get the length of an array in Java?",
    "options": ["length()", "size()", "length", "getLength()"],
    "answer": "length"
  },
{
    "question": "31) Which collection class maintains insertion order?",
    "options": ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"],
    "answer": "LinkedHashSet"
  },

{
    "question": "32) Which keyword is used to handle exceptions in Java?",
    "options": ["catch", "throw", "try", "throws"],
    "answer": "try"
  },
{
    "question": "33) Which operator is used for string concatenation in Java?",
    "options": ["+", "&", "*", "%"],
    "answer": "+"
  },
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
    window.location.href = 'javaresults.html';
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
            <button id="home-button" onclick="window.location.href='java.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('javaresults.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}