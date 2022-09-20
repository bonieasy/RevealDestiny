const elementFeedback = document.querySelector("#feedback") //constante criada para trazer texto de resposta na pagina h3(array)
const inputQuestion = document.querySelector("#inputQuestion") // Constante criada para pegar pergunta do usuario no input
const btnQuestion = document.querySelector("#btnQuestion") // constante do botao Fazer pergunta
const answers = [
    "Sure!",
  "I'm not so sure.",
  "It's definitely like this.",
  "Don't count on it.",
  "No doubts!",
  "Ask again later.",
  "Yes, definitely!",
  "My answer is no.",
  "You can count on that..",
  "Better not to tell you now.",
  "In my opinion, yes.",
  "My sources says no Minhas fontes dizem não.",
  "Probably.",
  "It is not possible to predict now.",
  "Good Perspective.",
  "Prospects are not so good.",
  "Yes.",
  "Concentrate and ask again.",
  "Signs point to yes.",
]

// clicar em fazer pergunta
function makeQuestion() {
    if (inputQuestion.value == ""){ // Se campo input vazio, apresenta msg
    alert ("Type your question")
    return //parar execucao da funcao
}

btnQuestion.setAttribute("disabled", true)

const Question = "<div>"+ inputQuestion.value + "</div>"

//Gerar numero aleatorio do array (const = answers)
const totalRespostas = answers.length // propriedade length  indica quantos argumentos a funcao espera.
const numeroAleatorio = Math.floor(Math.random() * totalRespostas) //Const gera numero aleatorio (0-1) * quantidade de elementos em answers
//Math.floor sempre aredonda um numero quebrado, para baixo
//Math.random gera numero de 0 ate 1

elementFeedback.innerHTML = Question + answers[numeroAleatorio] //propiedade que recebe info para apresentar no HTML

elementFeedback.style.opacity = 1;

//sumir a resposta depois de 3 segundos

setTimeout(function() { //Funcao
    elementFeedback.style.opacity = 0;
    btnQuestion.removeAttribute("disabled")
}, 3000)

}