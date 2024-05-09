const questions = [
    {
        question : "Which is the largest animal in the world ?",
        answers : [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: false},            
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question : "Which is the smallest continent in the world ?",
        answers : [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},            
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },{
        question : "Which is the largest desert in the world ?",
        answers : [
            {text: "Kalhari", correct: false},
            {text: "Gobi", correct: false},            
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },{
        question : "Which is the smallest country in the world ?",
        answers : [
            {text: "Vatican city", correct: true},
            {text: "Bhutan", correct: false},            
            {text: "Nepal", correct: false},
            {text: "Sri lanka", correct: false},
        ]
    }
];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-button");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){

    resetState();
    let currentQuestiion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestiion.question;
 
    currentQuestiion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
 }

 function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChildChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else {
        selectedBtn.classList.add("incorrect");
    }
}

 startQuiz();