


function abrir() {
    const formContainer = document.querySelector(".caixa-form"); 
    formContainer.style.display = "block"; 
    setTimeout(() => {
        formContainer.style.opacity = 1; 
    }, 10); 
}

function fechar() {
    const formContainer = document.querySelector(".caixa-form");
    formContainer.style.opacity = 0; 
    setTimeout(() => {
        formContainer.style.display = "none";
    }, 500); 
}