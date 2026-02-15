const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

let questions = [
    // Add 100 questions here
    
    // Continue adding questions until you reach 100
    // ...
   
    // Add more questions until you reach 100
 { "question": "1) What does HTML stand for?", "options": ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], "answer": "Hyper Text Markup Language" },
  { "question": "2) Which HTML tag is used to define an unordered list?", "options": ["ul", "ol", "li", "list"], "answer": "ul" },
  { "question": "3) Which tag is used to create a hyperlink in HTML?", "options": ["a", "link", "href", "hyperlink"], "answer": "a" },
  { "question": "4) Which attribute is used to specify an image in an img tag?", "options": ["alt", "href", "src", "link"], "answer": "src" },
  { "question": "5) What is the correct HTML tag for inserting a line break?", "options": ["br", "lb", "break", "newline"], "answer": "br" },
  { "question": "6) Which tag is used to define a table row in HTML?", "options": ["tr", "td", "th", "row"], "answer": "tr" },
  { "question": "7) Which HTML element is used to define important text?", "options": ["strong", "b", "important", "em"], "answer": "strong" },
  { "question": "8) Which tag is used to define a form in HTML?", "options": ["form", "input", "label", "fieldset"], "answer": "form" },
  { "question": "9) What does the title tag define?", "options": ["The page title", "The main heading", "A paragraph", "An image"], "answer": "The page title" },
  { "question": "10) Which HTML tag is used to create a numbered list?", "options": ["ol", "ul", "li", "dl"], "answer": "ol" },
  { "question": "11) Which attribute is used to open a link in a new tab?", "options": ["target _new", "target _blank", "target _self", "target new_tab"], "answer": "target _blank" },
  { "question": "12) What is the correct HTML element for inserting a background color?", "options": ["body style background color yellow", "background yellow background", "bgcolor yellow bgcolor", "color yellow color"], "answer": "body style background color yellow" },
  { "question": "13) Which tag is used to define a paragraph?", "options": ["p", "para", "paragraph", "pg"], "answer": "p" },
  { "question": "14) Which tag is used to create a dropdown list?", "options": ["select", "dropdown", "list", "option"], "answer": "select" },
  { "question": "15) Which element is used to define navigation links?", "options": ["nav", "navigation", "menu", "links"], "answer": "nav" },
  { "question": "16) Which HTML tag is used for the largest heading?", "options": ["h1", "h6", "h3", "heading"], "answer": "h1" },
  { "question": "17) Which tag is used to embed an external webpage in HTML?", "options": ["iframe", "embed", "frame", "window"], "answer": "iframe" },
  { "question": "18) Which tag is used to display a horizontal rule?", "options": ["hr", "line", "br", "rule"], "answer": "hr" },
  { "question": "19) Which tag is used to group inline elements?", "options": ["span", "div", "section", "group"], "answer": "span" },
  { "question": "20) Which tag is used to define a footer in HTML5?", "options": ["footer", "foot", "bottom", "end"], "answer": "footer" },
  { "question": "21) Which attribute specifies an alternative text for an image?", "options": ["alt", "title", "src", "href"], "answer": "alt" },
  { "question": "22) Which HTML tag is used to define emphasized text?", "options": ["em", "i", "italic", "strong"], "answer": "em" },
  { "question": "23) Which tag is used to define a block of code in HTML?", "options": ["code", "pre", "script", "blockquote"], "answer": "code" },
  { "question": "24) Which tag is used to define a caption for a table?", "options": ["caption", "title", "head", "legend"], "answer": "caption" },
  { "question": "25) Which HTML tag is used to define a section in a document?", "options": ["section", "div", "article", "container"], "answer": "section" },
  { "question": "26) Which tag is used to define a clickable button?", "options": ["button", "click", "submit", "input type button"], "answer": "button" },
  { "question": "27) Which HTML element is used to define a quotation?", "options": ["blockquote", "quote", "q", "cite"], "answer": "blockquote" },
  { "question": "28) Which tag is used to insert metadata in an HTML document?", "options": ["meta", "head", "data", "info"], "answer": "meta" },
  { "question": "29) Which tag is used to define a progress bar?", "options": ["progress", "bar", "meter", "status"], "answer": "progress" },
  { "question": "30) Which HTML attribute is used to specify an input field must be filled out?", "options": ["required", "validate", "mandatory", "needed"], "answer": "required" }
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
    window.location.href = 'htmlresults.html';
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
if (window.location.pathname.endsWith('htmlresults.html')) {
    displayResults();
} else {
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}