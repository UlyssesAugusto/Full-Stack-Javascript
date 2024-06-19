const primeiroNome = prompt ("Informe o primeiro nome do Recruta:")
const sobrenome = prompt ("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt ("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt ("Qual é ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "Nome completo: " + primeiroNome + " " + sobrenome +
    " Campo de Estudo: " + campoDeEstudo + 
    " Idade: "+ (2022 - anoDeNascimento)
)