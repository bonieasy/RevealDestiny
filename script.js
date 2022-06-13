const elementFeedback = document.querySelector("#feedback") //constante criada para trazer texto de resposta na pagina h3(array)
const inputQuestion = document.querySelector("#inputQuestion") // Constante criada para pegar pergunta do usuario no input
const btnQuestion = document.querySelector("#btnQuestion") // constante do botao Fazer pergunta
const answers = [
    "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function makeQuestion() {
    if (inputQuestion.value == ""){ // Se campo input vazio, apresenta msg
    alert ("Digite sua pergunta")
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