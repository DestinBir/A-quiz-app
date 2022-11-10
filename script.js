const quizData = [
    {
        question: "Quel est l'âge ta mère?",
        a: '40',
        b: '41',
        c: '26',
        d: '54',
        correct: 'b'
    },{
        question: 'Quel est le nom de ta mère?',
        a: 'Liliane',
        b: 'Jossy',
        c: 'Ernestine',
        d: 'Delcine',
        correct: 'a'
    },{
        question: 'Quel est le nom de ta petite amie?',
        a: 'Divine',
        b: 'Grace',
        c: 'Daniella',
        d: 'Jocelyne',
        correct: 'c'
    },{
        question: 'Quel est le nom de ton père?',
        a: 'Prince',
        b: 'John',
        c: 'Richard',
        d: 'Serge',
        correct: 'd'
    },{
        question: "Qui est ton meilleur ami?",
        a: 'Giscard',
        b: 'Jonathan',
        c: 'Elie',
        d: 'Delphin',
        correct: 'a'
    }
]
const liste = document.getElementById('list')
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }    
    })
    return answer
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer){
        if (answer === quizData[currentQuiz].correct) {
            score ++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            questionEl.innerText = "Tu as bien repondu " + score + " / " + quizData.length + " questions." 
            liste.innerHTML = '<button onClick="location.reload()">Merci!</button>'
            submitBtn.innerText = ''
        }
    }
    
})