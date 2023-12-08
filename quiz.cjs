const fs= require('fs')
const {count} = require('console')
const questions = JSON.parse(fs.readFileSync('./questions.json'),'utf8')

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const totalQuestions= questions.length
console.log('Welcome to Mini Quiz\n')

let currentQuestion = 0
let score = 0

const ask = () => {
  if (currentQuestion< totalQuestions){
    console.log(questions[currentQuestion].question)
    rl.question('>',(answer)=>{
      if(answer === questions[currentQuestion].answer)
      {
        console.log("Benar")
        score++
      }else{
        console.log("Salah")
      }
      currentQuestion++
      ask()
    })
  }else{
    console.log(`Quiz completed Your Score: ${score}/${totalQuestions}`)
    rl.close()
  }
}

ask()
