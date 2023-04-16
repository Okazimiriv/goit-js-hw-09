import { Notify } from 'notiflix/build/notiflix-notify-aio'; 

const refs = {
  form: document.querySelector('form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
  };

refs.form.addEventListener('click', onSubmitBtn);

function onSubmitBtn(e) { 
  e.preventDefault();
  
  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value); 

  for (let position = 1; position <= amount; position += 1) {
     let delayPromise = delay + step * position;      

    createPromise(position, delayPromise)
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

