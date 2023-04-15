const refs = {
  // formEl: document.querySelector('form'),
  inputFirstDelay: document.querySelector('[name="delay"]'),
  inputDelayStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
  };

  refs.submitBtn.addEventListener('click', onSubmitBtn);
// refs.inputFirstDelay.addEventListener('input', onSubmitBtn);
  refs.inputFirstDelay.addEventListener('change', setInput);
  refs.inputDelayStep.addEventListener('change', setInput);
  refs.inputAmount.addEventListener('change', setInput);
  

//  console.log(refs.formEl);
setInput();

function setInput() {
  let firstDelay = refs.inputFirstDelay.value;
  let delayStep = refs.inputDelayStep.value;
  let amount = refs.inputAmount.value;
  console.log('firstDelay', firstDelay);
  console.log('delayStep', delayStep);
  console.log('amount', amount);
}

function onSubmitBtn(evt) { 
  // evt.preventDefault();

  
  

};

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         // Fulfill
//       } else {
//         // Reject
//       } 
//     }, 1000 * delay)    
//   }
// }
