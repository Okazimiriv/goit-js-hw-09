import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  inputData: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', timerStart);

let selectedDate = null;
let nowDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      onCheckData(selectedDates);
  },
};

flatpickr(refs.inputData, options);

function onCheckData(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  nowDate = new Date().getTime(); 

  if (selectedDate < nowDate) {
    window.alert('Please choose a date in the future');
    return;
    } else {
    refs.startBtn.disabled = false; 
     console.log('selectedDate: ', selectedDate);
     console.log('nowDate: ', nowDate);
    }
};

//_____________

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      
      const deltaTime = startTime - currentTime;
      const convertTime = convertMs(deltaTime);
  
      console.log(convertTime);
    }, 1000);    
  },
};

function timerStart() {
//  timer.start();
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
}




