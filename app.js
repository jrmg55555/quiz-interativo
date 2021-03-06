const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = [
  'A', 'C', 'C', 'B', 'B', 'A', 'D', 'B', 'A', 'D'
]

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) =>
  form[`inputQuestion${index + 1}`].value
)

const calculeUserSocre = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]
    if (isUserAnswerCorrect) {
      score += 10
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

const resetUserScore = () => {
  score = 0
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers() /* Obtém as resposta do usuário */

  resetUserScore() /* Reseta a pontuação */
  calculeUserSocre(userAnswers) /* Calcula a pontuação do usuário */
  showFinalScore() /* Exibe a pontuação final */
  animateFinalScore() /* Anima a pontuação final */
})