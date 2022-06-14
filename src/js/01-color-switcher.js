

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let interval = 0;
stopButton.disabled = true

const handleclickStart = () => {
    interval = setInterval(function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = '#' + randomColor;
    }, 1000);
    startButton.disabled = true
    stopButton.disabled = false
};

const handleclickStop = () => {
    clearInterval(interval);
    stopButton.disabled = true
    startButton.disabled = false
}

startButton.addEventListener("click", handleclickStart);

stopButton.addEventListener('click', handleclickStop);
