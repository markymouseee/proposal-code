const noBtn = document.querySelector(".buttonNo");
const question = document.querySelector(".question");
const wrapper = document.querySelector(".body-main");
const yesBtn = document.querySelector(".buttonYes");


const wrap = wrapper.getBoundingClientRect();
const btnNo = noBtn.getBoundingClientRect();

const icon = document.querySelector(".fa-solid");
document.getElementById("btnYes").addEventListener("click", () => {
    question.innerHTML = "I Love You";
    noBtn.hidden = true;
    yesBtn.hidden = true;
    icon.classList.toggle('fa-heart');
    icon.classList.remove('fa-circle-question');
})

document.getElementById("btnNo").addEventListener('mousemove', () => {
    const x = Math.floor(Math.random() * (wrap.width + btnNo.width)) + 100;
    const y = Math.floor(Math.random() * (wrap.height - btnNo.height)) + 100;
   
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
})

document.getElementById("btnNo").addEventListener("click", () =>{
    question.innerHTML = "No Cheating"
})