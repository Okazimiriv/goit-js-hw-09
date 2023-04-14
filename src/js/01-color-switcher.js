const startBtn = document.querySelector('button[data-start]');  
const stopBtn = document.querySelector('button[data-stop]');  
let timerId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

stopBtn.disabled = true;

function onStartBtn() {  
  startBtn.disabled = true;
  stopBtn.disabled = false;
  
  timerId = setInterval(() => {
    const generetedColor = getRandomHexColor();
    document.body.style.backgroundColor = generetedColor;
    console.log(generetedColor);
  }, 1000);  
}

function onStopBtn() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
   clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}





