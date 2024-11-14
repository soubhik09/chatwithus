const chatWindow = document.querySelector('.chat_window');
const closeIcon = document.querySelector('.close_icon');
const chatIcon = document.querySelector('.chat_icon');
let input = document.getElementById('inputField');
const sendBtn = document.querySelector('.send_btn')
const chatBox = document.querySelector('.chat_sms');


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

let flag = true; // This is for hide S after one message

const sendMessage =  () => {
    let inputValue = input.value;
    if(flag){
        chatBox.innerHTML += `
                    <div class="right">
                        <p class="text">${inputValue}</p>
                        <div class="circle">S</div>
                    </div> 
        `
        flag = false;
    }else{
        chatBox.innerHTML += `
        <div class="right">
            <p class="text">${inputValue}</p>
            <div class="circle hidden">S</div>  
        </div> 
        `
    }

    input.value = ""

    chatBox.scrollTop = chatBox.scrollHeight;
        
}

sendBtn.addEventListener('click', () => {
    if(!(input.value === '')){
        sendMessage();
    }
});

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !(input.value === '')){
        sendMessage();
    }
})