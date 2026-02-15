const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    
        {
          "question": "1) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        System.out.println(x);\n    }\n}",
          "options": ["10", "Error", "None of the above", "Compilation Error"],
          "answer": "10"
        },
        {
          "question": "2) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}",
          "options": ["5", "6", "Error", "None of the above"],
          "answer": "5"
        },
        {
          "question": "3) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(++x);\n    }\n}",
          "options": ["5", "6", "Error", "None of the above"],
          "answer": "6"
        },
        {
          "question": "4) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        System.out.println(a * b);\n    }\n}",
          "options": ["50", "15", "Error", "None of the above"],
          "answer": "50"
        },
        {
          "question": "5) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        a += 10;\n        System.out.println(a);\n    }\n}",
          "options": ["15", "5", "10", "Error"],
          "answer": "15"
        },
        {
          "question": "6) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println(a / 2);\n    }\n}",
          "options": ["2", "2.5", "Error", "None of the above"],
          "answer": "2"
        },
        {
          "question": "7) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println(a % 2);\n    }\n}",
          "options": ["1", "0", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "8) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        System.out.println(a < b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "9) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        System.out.println(a > b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "false"
        },
        {
          "question": "10) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a > 0) {\n            System.out.println(\"Positive\");\n        } else {\n            System.out.println(\"Negative\");\n        }\n    }\n}",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Positive"
        },
        {
          "question": "11) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = -5;\n        if (a > 0) {\n            System.out.println(\"Positive\");\n        } else {\n            System.out.println(\"Negative\");\n        }\n    }\n}",
          "options": ["Positive", "Negative", "Error", "None of the above"],
          "answer": "Negative"
        },
        {
          "question": "12) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr.length);\n    }\n}",
          "options": ["3", "Error", "None of the above", "2"],
          "answer": "3"
        },
        {
          "question": "13) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.charAt(0));\n    }\n}",
          "options": ["H", "Error", "None of the above", "Hello"],
          "answer": "H"
        },
        {
          "question": "14) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.toUpperCase());\n    }\n}",
          "options": ["HELLO", "Hello", "Error", "None of the above"],
          "answer": "HELLO"
        },
        {
          "question": "15) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.length());\n    }\n}",
          "options": ["5", "Error", "None of the above", "Hello"],
          "answer": "5"
        },
        {
          "question": "16) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a + b);\n    }\n}",
          "options": ["15", "Error", "None of the above", "5"],
          "answer": "15"
        },
        {
          "question": "17) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a == b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "false"
        },
        {
          "question": "18) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 5;\n        System.out.println(a == b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "19) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a != b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "20) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a < b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "21) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a > b);\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "false"
        },
       {
          "question": "22) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Java\";\n        System.out.println(str.substring(1, 3));\n    }\n}",
          "options": ["av", "Ja", "Error", "None of the above"],
          "answer": "av"
        },
        {
          "question": "23) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Java\";\n        System.out.println(str.indexOf('a'));\n    }\n}",
          "options": ["1", "2", "Error", "None of the above"],
          "answer": "1"
        },
        {
          "question": "24) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Java\";\n        System.out.println(str.contains(\"va\"));\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "25) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[1]);\n    }\n}",
          "options": ["2", "1", "Error", "None of the above"],
          "answer": "2"
        },
        {
          "question": "26) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3};\n        System.out.println(arr[3]);\n    }\n}",
          "options": ["Error", "3", "None of the above", "2"],
          "answer": "Error"
        },
        {
          "question": "27) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.equals(\"Hello\"));\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "28) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.equalsIgnoreCase(\"hello\"));\n    }\n}",
          "options": ["true", "false", "Error", "None of the above"],
          "answer": "true"
        },
        {
          "question": "29) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        System.out.println(a + b);\n    }\n}",
          "options": ["15", "5", "Error", "None of the above"],
          "answer": "15"
        },
        {
          "question": "30) What will be the output of the following Java program?",
          "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
          "options": ["Hello, World!", "Error", "None of the above", "Hello"],
          "answer": "Hello, World!"
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
    window.location.href = 'javaresults1.html';
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
if (window.location.pathname.endsWith('javaresults1.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}