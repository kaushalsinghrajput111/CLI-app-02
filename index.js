let score = 0;
let questions = [{
  question: "How many infinity stones are there",
  answer: "six"
},
{
  question: "Where is Captain America from?",
  answer: "Brooklyn"
},
{
  question: "Who is Tony Stark’s father?",
  answer: "howard stark"
},
{
  question: "Wanda and her brother Pietro are from where?",
  answer: "Sokovia"
},
{
  question: "Hawkeye has how many children?",
  answer: "3"
}
]
const welcome = () => {
  let userName = prompt("what is your name?")
  userName = userName.toUpperCase()
  console.log("welcome " + (userName) + " to my quiz")
}
const playGames = () => {
  let quizPlay = prompt("do you play this quiz")
  quizPlay=quizPlay.toUpperCase();
  if (quizPlay === "YES") {
    for (let i = 0; i < questions.length; i++) {
      let p = (prompt(questions[i].question))
      p=p.toLowerCase();
let Answer= questions[i].answer
      Answer=Answer.toLowerCase();
      if (p == Answer) {
   score = score + 1;
  console.log(` you are correctly guess right answer \n User answer: ${p}\n your score:${score}`)
      }
      else {
        score = score - 1;
        console.log(` your are wrong  answer is:${Answer} \n User answer: ${p} \n your score:${score}`)
      }
    }

    if (score > 4) {
      console.log(
        `Your final score is:${score} \n I am very happy 🥳🥳🥳🥳\n you are everything know about Marvel`
      )
    }
    else if (score > 3) {
      console.log(
        `Your final score is:${score} \n Not bad 😊  you are something  know about marvel`)
    }
    else {
      console.log(
        `Your final score is:${score} \n  so sad 😒  you are nothing  know about marvel`)
    }
  }
  else {
    console.log("Please you leave my quizz")
  }
}
welcome()
playGames()