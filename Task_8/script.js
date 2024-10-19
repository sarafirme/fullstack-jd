const button = document.getElementById('card-btn')
const messageError = document.getElementById('messageError')

button.addEventListener('click', () => {
    messageError.textContent = "Erro ao adicionar produto"
});