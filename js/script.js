let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")
//Tornando o conteúdo do email minúsculo 

// Validação campo nome
let nome = document.querySelector("#nome")

function exibirNome(){
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}
nome.addEventListener("blur", exibirNome)

email.addEventListener("keyup", function () {
    let minusculo = email.value.toLowerCase()
    confirmacao.value = email.value

    if (minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1) {
        console.log("Email inválido")
        // email.style.border='2px solid red'
        email.classList.add("border-danger")
        email.classList.remove("border-success")

    } else {
        console.log("Email válido")
        // email.style.border='2px solid green'
        email.classList.remove("border-danger")
        email.classList.add("border-success")
    }

    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

//()=>{} isto é uma arrow function, ou seja, uma versão resumida da função anônima
btn_olho.addEventListener("click", () => {
    if (btn_olho.classList.contains("fa-eye")) {
        console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    } else {
        console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})

function validarFormulario(){

    if (nome.value === '' || equipe.value === ''|| placa.value === '' || modelo.value === ''|| local.value === ''){
        return false;   
    }
    else{
        return true    
    }
    };
 
    document.getElementById("btnEnviar").addEventListener("click", (evento)=>{
        evento.preventDefault()
        if(validarFormulario()){
            salvarDados()
            window.location.href="index.html"
        }
        else{
            alert("Por favor preencha todos os campos.");
        }
        
      });
    