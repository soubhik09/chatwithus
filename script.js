const chatWindow = document.querySelector('.chat_window');
const closeIcon = document.querySelector('.close_icon');
const chatIcon = document.querySelector('.chat_icon');


chatIcon.addEventListener('click', ()=>{
    // chatWindow.style.display = "flex";
    chatWindow.classList.add('show');
    chatIcon.style.display = "none";
})

closeIcon.addEventListener('click', () => {
    // chatWindow.style.display = "none";
    chatWindow.classList.remove('show');
    chatIcon.style.display = "flex";
})