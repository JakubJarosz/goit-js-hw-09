const form = document.querySelector('form');


form.addEventListener('submit', handleSubmit);

async function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`SUCECSS ${position}`);
      } else {
        reject(`ERROR ${position}`);
      }
    }, delay);
  });
}
async function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  for (let i = 1; i <= amount.value; i++) {
    await createPromise(i, i == 1 ? delay.value : step.value)
      .then(x => {
        console.log(x);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
