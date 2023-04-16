import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';


const refs = {
  inputData: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  };

document.body.style.backgroundColor = '#7cc16b';

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', timerStart);

const TIMER_DELAY = 1000;
let turgetTime = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {      
        // window.alert('Please choose a date in the future');
      Report.failure(
  '🥺 Ooops...', 
  'Please, choose a date in the future',
  'Ok ',
  {
     svgSize: '50px',
  },
);
        return;
    } else {
      Report.success(
      '👏  Congratulation! ',
      'Click on START!',
        'Ok',
      {
     svgSize: '50px',
      },
        );
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
      const currentTime = Date.now(); 
      
      const deltaTime = turgetTime - currentTime;
      // const { days, hours, minutes, seconds } = convertMs(deltaTime);
      const time = convertMs(deltaTime);

      if (deltaTime <= 1000) {
        this.stop();   
      }          
          refs.inputData.disabled = true;
      upDateTimer(time);          
    }, TIMER_DELAY);    
  },

  stop() {
    refs.startBtn.disabled = true;
    refs.inputData.disabled = true;    
    clearInterval(intervalId);   
    Report.info(
        'Timer stopped!',
        'Please, reload this page and choose a new date',
      'Ok',
        {
     svgSize: '50px',
      },
      );
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



// function declensionNum(num, words) {
//   return words[
//     num % 100 > 4 && num % 100 < 20
//       ? 2
//       : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//   ];
// }
// rootSelector.querySelector('.js-timer__hours').dataset.title =
//       declensionNum(hours, ['година', 'години', 'годин']);
//     rootSelector.querySelector('.js-timer__minutes').dataset.title =
//       declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
//     rootSelector.querySelector('.js-timer__seconds').dataset.title =
//       declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
