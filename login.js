//LOGIN USUÁRIO

//buscar usuarios do local storage
let novaListaUsuarios = JSON.parse(localStorage.getItem('dadosFormulario'))
const formularioLogin = document.getElementById('formularioLogin')

//ouvinte de eventos 
formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault()
    loginUsuario()
})

//capturar email e senha
function loginUsuario(){
    const usernameLogin = document.getElementById('username')
    const passwordlogin = document.getElementById('password')

//percorrer dados e verificar se atendem os requisitos
    const usuarioLogando = novaListaUsuarios.find((dado) => {
        return dado.nome === usernameLogin.value && dado.senha === passwordlogin.value
    })

//verificar se o usuario esta logado e direcionar para pagina de recados
    if(usuarioLogando){
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogando))
        window.location.href = "recados.html"
        return
    }else{
        const espaco = document.getElementById('alertaUsuario')
//caso não encontre  ele irá dar um alerta para o usuario
        const alertContaCriada = document.createElement('div')
        alertContaCriada.setAttribute('class', 'alert alert-danger mt-3 alert-dismissible fade show')
        const conteudoContaCriada = document.createElement('strong')
        conteudoContaCriada.innerText = 'Usuário ou senha incorretos!'
        const buttonFechar = document.createElement('button')
        buttonFechar.setAttribute('class', 'btn-close')
        buttonFechar.setAttribute('data-bs-dismiss', 'alert')
        buttonFechar.setAttribute('id', 'fecharAlert')

        alertContaCriada.appendChild(conteudoContaCriada)
        alertContaCriada.appendChild(buttonFechar)
        espaco.appendChild(alertContaCriada)
        return
    }
}