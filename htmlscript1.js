const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    
    // Continue adding questions until you reach 100
    // ...
   
    // Add more questions until you reach 100
    
        {
          "question": "1) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Test</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>",
          "options": ["Hello, World!", "Test", "Error", "None of the above"],
          "answer": "Hello, World!"
        },
        {
          "question": "2) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <p>This is a paragraph.</p>\n</body>\n</html>",
          "options": ["This is a paragraph.", "Error", "None of the above", "Paragraph"],
          "answer": "This is a paragraph."
        },
        {
          "question": "3) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <h2>Title</h2>\n    <p>Content</p>\n</body>\n</html>",
          "options": ["TitleContent", "Title Content", "Error", "None of the above"],
          "answer": "TitleContent"
        },
        {
          "question": "4) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n    </ul>\n</body>\n</html>",
          "options": ["Item 1Item 2", "Item 1, Item 2", "Error", "None of the above"],
          "answer": "Item 1Item 2"
        },
        {
          "question": "5) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <a href='https://www.example.com'>Example</a>\n</body>\n</html>",
          "options": ["Example", "https://www.example.com", "Error", "None of the above"],
          "answer": "Example"
        },
        {
          "question": "6) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <img src='image.jpg' alt='Image'>\n</body>\n</html>",
          "options": ["Image", "image.jpg", "Error", "None of the above"],
          "answer": "Image"
        },
        {
          "question": "7) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <table>\n        <tr>\n            <td>Cell 1</td>\n            <td>Cell 2</td>\n        </tr>\n    </table>\n</body>\n</html>",
          "options": ["Cell 1Cell 2", "Cell 1, Cell 2", "Error", "None of the above"],
          "answer": "Cell 1Cell 2"
        },
        {
          "question": "8) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <form>\n        <input type='text' placeholder='Enter text'>\n    </form>\n</body>\n</html>",
          "options": ["Enter text", "Error", "None of the above", "Text Input"],
          "answer": "Enter text"
        },
        {
          "question": "9) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <h1 style='color:red;'>Red Heading</h1>\n</body>\n</html>",
          "options": ["Red Heading", "Error", "None of the above", "Red Heading in red color"],
          "answer": "Red Heading"
        },
        {
          "question": "10) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <p>This is <strong>bold</strong> text.</p>\n</body>\n</html>",
          "options": ["This is bold text.", "This is bold text", "Error", "None of the above"],
          "answer": "This is bold text."
        },
        {
          "question": "11) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <div>Content in a div</div>\n</body>\n</html>",
          "options": ["Content in a div", "Error", "None of the above", "Div Content"],
          "answer": "Content in a div"
        },
        {
          "question": "12) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <span>Inline text</span>\n</body>\n</html>",
          "options": ["Inline text", "Error", "None of the above", "Text"],
          "answer": "Inline text"
        },
        {
          "question": "13) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <blockquote>This is a quote.</blockquote>\n</body>\n</html>",
          "options": ["This is a quote.", "Error", "None of the above", "Quote"],
          "answer": "This is a quote."
        },
        {
          "question": "14) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <hr>\n</body>\n</html>",
          "options": ["Horizontal line", "Error", "None of the above", "Line"],
          "answer": "Horizontal line"
        },
        {
          "question": "15) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <button>Click Me</button>\n</body>\n</html>",
          "options": ["Click Me", "Error", "None of the above", "Button"],
          "answer": "Click Me"
        },
        {
          "question": "16) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <input type='checkbox' checked> Check me\n</body>\n</html>",
          "options": ["Check me", "Error", "None of the above", "Checkbox"],
          "answer": "Check me"
        },
        {
          "question": "17) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <select>\n        <option>Option 1</option>\n        <option>Option 2</option>\n    </select>\n</body>\n</html>",
          "options": ["Option 1Option 2", "Option 1, Option 2", "Error", "None of the above"],
          "answer": "Option 1Option 2"
        },
        {
          "question": "18) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <textarea>Text area</textarea>\n</body>\n</html>",
          "options": ["Text area", "Error", "None of the above", "Area"],
          "answer": "Text area"
        },
        {
          "question": "19) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <label for='input'>Label</label>\n    <input id='input' type='text'>\n</body>\n</html>",
          "options": ["Label", "Error", "None of the above", "Input"],
          "answer": "Label"
        },
        {
          "question": "20) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <meta charset='UTF-8'>\n</body>\n</html>",
          "options": ["Error", "None of the above", "UTF-8", "Meta"],
          "answer": "Error"
        },
        {
          "question": "21) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <link rel='stylesheet' href='styles.css'>\n</body>\n</html>",
          "options": ["Link to styles.css", "Error", "None of the above", "Stylesheet"],
          "answer": "Link to styles.css"
        },
        {
          "question": "22) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <script src='script.js'></script>\n</body>\n</ html>\n",
          "options": ["Script loaded", "Error", "None of the above", "JavaScript"],
          "answer": "Script loaded"
        },
        {
          "question": "23) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <title>Page Title</title>\n</body>\n</html>",
          "options": ["Page Title", "Error", "None of the above", "Title"],
          "answer": "Error"
        },
        {
          "question": "24) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <meta name='description' content='This is a description'>\n</body>\n</html>",
          "options": ["This is a description", "Error", "None of the above", "Description"],
          "answer": "Error"
        },
        {
          "question": "25) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <style>h1 {color: blue;}</style>\n    <h1>Blue Heading</h1>\n</body>\n</html>",
          "options": ["Blue Heading", "Error", "None of the above", "Blue Heading in blue color"],
          "answer": "Blue Heading"
        },
        {
          "question": "26) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <audio controls>\n        <source src='audio.mp3' type='audio/mpeg'>\n    </audio>\n</body>\n</html>",
          "options": ["Audio player", "Error", "None of the above", "Audio"],
          "answer": "Audio player"
        },
        {
          "question": "27) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <video width='320' height='240' controls>\n        <source src='video.mp4' type='video/mp4'>\n    </video>\n</body>\n</html>",
          "options": ["Video player", "Error", "None of the above", "Video"],
          "answer": "Video player"
        },
        {
          "question": "28) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <canvas id='myCanvas' width='200' height='100'></canvas>\n</body>\n</html>",
          "options": ["Canvas element", "Error", "None of the above", "Drawing area"],
          "answer": "Canvas element"
        },
        {
          "question": "29) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <svg height='100' width='100'>\n        <circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />\n    </svg>\n</body>\n</html>",
          "options": ["Red circle", "Error", "None of the above", "Circle"],
          "answer": "Red circle"
        },
        {
          "question": "30) What will be the output of the following HTML code?",
          "code": "<!DOCTYPE html>\n<html>\n<body>\n    <iframe src='https://www.example.com' width='300' height='200'></iframe>\n</body>\n</html>",
          "options": ["Embedded page", "Error", "None of the above", "Frame"],
          "answer": "Embedded page"
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
    window.location.href = 'htmlresults1.html';
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
            <button id="home-button" onclick="window.location.href='html.html'">Go to Home</button>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No results found. Please complete the quiz first.</p>`;
    }
}

// Check if we are on the results page
if (window.location.pathname.endsWith('htmlresults1.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}