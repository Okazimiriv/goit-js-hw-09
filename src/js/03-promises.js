import { Notify } from 'notiflix/build/notiflix-notify-aio'; 

const refs = {
  form: document.querySelector('form'),
  inputFirstDelay: document.querySelector('[name="delay"]'),
  inputDelayStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
  };

refs.form.addEventListener('click', onSubmitBtn);



function onSubmitBtn(e) { 
  e.preventDefault();
  
  let delay = Number(refs.inputFirstDelay.value);
  let step = Number(refs.inputDelayStep.value);
  let amount = Number(refs.inputAmount.value); 

    for (let i = 1; i <= amount; i += 1) {
      let delayPromise = delay + step * i;      

    createPromise(i, delayPromise)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
     
  } 
   refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {      
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
}

