
function setHeading() {
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Lengua Castellana 2º Bachillerato";
}

function loadQuiz() {
    const questions = [
        {
            question: "¿Quién escribió el poema 'Rima LIII'?",
            options: ["Gustavo Adolfo Bécquer", "Federico García Lorca", "Antonio Machado", "Miguel de Unamuno"],
            answer: "Gustavo Adolfo Bécquer"
        },
        {
            question: "¿Cuál de estas obras pertenece al género del teatro del Siglo de Oro español?",
            options: ["La Celestina", "Don Quijote de la Mancha", "La Regenta", "Los miserables"],
            answer: "La Celestina"
        },
        {
            question: "¿Quién es el autor de 'Platero y yo'?",
            options: ["Miguel de Unamuno", "Antonio Machado", "Juan Ramón Jiménez", "Pablo Neruda"],
            answer: "Juan Ramón Jiménez"
        },
        {
            question: "¿Qué figura literaria se caracteriza por la exageración de una idea para enfatizarla?",
            options: ["Hipérbole", "Metáfora", "Aliteración", "Onomatopeya"],
            answer: "Hipérbole"
        },
        {
            question: "¿Cuál de estos géneros literarios se caracteriza por la narración de hechos reales de forma creativa?",
            options: ["Novela", "Poesía", "Ensayo", "Teatro"],
            answer: "Novela"
        },
        {
            question: "¿Qué autor español escribió la obra 'La casa de Bernarda Alba'?",
            options: ["Federico García Lorca", "Miguel de Cervantes", "Antonio Machado", "Pío Baroja"],
            answer: "Federico García Lorca"
        }
    ];
        

    let currentQuestionIndex = 0;

    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showResult();
        }
    }

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById("question");
        const optionsElement = document.getElementById("options");
        
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        const resultElement = document.getElementById("result");

        if (selectedOption === currentQuestion.answer) {
            resultElement.textContent = "¡Respuesta correcta!";
        } else {
            resultElement.textContent = "Respuesta incorrecta. La respuesta es: " + currentQuestion.answer;
        }
    }

    function showResult() {
        const quizContainer = document.getElementById("quiz-container");
    }

    displayQuestion();
}

setHeading();
loadQuiz();