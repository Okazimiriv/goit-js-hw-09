import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const refs = {
  inputData: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
  value: document.querySelector('.value'),
  label: document.querySelector('.label'),
  field: document.querySelector('.field'),
};

// 
const size = '50px';
refs.timer.style.display = 'flex';
refs.timer.style.width = '400px';
refs.timer.style.fontSize = '20px';
refs.days.style.fontSize = size;
refs.hours.style.fontSize = size;
refs.minutes.style.fontSize = size;
refs.seconds.style.fontSize = size;
document.body.style.backgroundColor = '#7cc16b';
//


refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', timerStart);


let turgetTime = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0]< new Date()) {
        window.alert('Please choose a date in the future');
        return;
     } else {
      turgetTime = selectedDates[0];
      refs.startBtn.disabled = false;         
    };   
  },
};
 
 const fp = flatpickr(refs.inputData, options);
//_____________

const timer = { 
  start() {
    intervalId = setInterval(() => {
      const currentTime = new Date();         
      const deltaTime = turgetTime - currentTime;
      // const { days, hours, minutes, seconds } = convertMs(deltaTime);
      const time = convertMs(deltaTime);

      upDateTimer(time);          
    }, 1000);    
  },

  stop() {
    refs.startBtn.disabled = true;
    refs.inputData.disabled = true;    
    clearInterval(intervalId);    
    return;
  },
};

function timerStart() {  
  if (!intervalId) {
    timer.start();
    console.log('start');
  } else {    
    timer.stop();
    console.log('stop');
    return;
  }
};

function upDateTimer({ days, hours, minutes, seconds }) {
   console.log(`${pad(days)} : ${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`);  

  refs.days.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.minutes.textContent = pad(minutes);
  refs.seconds.textContent = pad(seconds);
 
}; 

function pad(value) {
  // Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
  return String(value).padStart(2, '0');
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};




