function dobro(x){
 alert("O dobro de " + x + " é " + ( x * 2))
}

//dobro(5)
//dobro(7)
//dobro()

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

//dizerOla("Ulysses")
// dizerOla()

function soma(a, b, c){
    alert("Resultado da soma é " + (a + b + c))
}

// soma (7, 3, 5)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

//criarUsuario ("Ulysses", "Ulysses@email.com", "1234")

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
    usuario.senha
    usuario.endereco
}

const dadosDoUsuario = {
   nome: "",
   email: "",
   senha: "",
   endereco: "",
}

objetoComoParametro(dadosDoUsuario)
