
const formularioLogin = document.querySelector("#formLogin");

const telefone = document.querySelector("#telefone");
const senha = document.querySelector("#senha");

if(formularioLogin) {

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

window.location.href = "home.html";

});
}



const formularioCadastro = document.querySelector("#formCadastro");

if (formularioCadastro) {
formularioCadastro.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.querySelector("#nome").value;

        localStorage.setItem("nome", nome);
        
        window.location.href = "anamnese.html";
   
});
}



const formularioAnamnese = document.querySelector("#formAnamnese");

if (formularioAnamnese) {
    formularioAnamnese.addEventListener("submit", function(event) {
        event.preventDefault();

        window.location.href = "home.html";
    });

}

const saudacao = document.querySelector("#saudacao");
if (saudacao) {
    const nomeSalvo = localStorage.getItem("nome");

    if(nomeSalvo) {
        saudacao.textContent = "Olá, " + nomeSalvo + "!";
    }
    
    
}