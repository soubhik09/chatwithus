const chatWindow = document.querySelector('.chat_window');
const closeIcon = document.querySelector('.close_icon');
const chatIcon = document.querySelector('.chat_icon');


chatIcon.addEventListener('click', ()=>{
    chatWindow.style.display = "flex";
    chatIcon.style.display = "none";
})

closeIcon.addEventListener('click', () => {
    chatWindow.style.display = "none";
    chatIcon.style.display = "flex";
})