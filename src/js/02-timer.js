import flatpickr from 'flatpickr';
import '/node_modules/flatpickr/dist/flatpickr.min.css';
const button = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

button.disabled = true

let timerId = 0

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (e) {
    let currentDate = new Date()
    let pickedDate = e[0];
    if (pickedDate < currentDate) {
      alert('Please choose a date in the future');
      button.disabled = true;
    } else {
      button.disabled = false;
      setInterval(() => {
        let curentDatev2 = new Date()
        timerId = pickedDate - curentDatev2;
      },1000)
        
       
}
    },
};

flatpickr('#datetime-picker', options);

const timing = {}; 

function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  timing.days = Math.floor(ms / day);
  timing.hours = Math.floor((ms % day) / hour);
  timing.minutes = Math.floor(((ms % day) % hour) / minute);
  timing.seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return timing;
}

function addLeadingZero(value) {
    const string = String(value);
    return string.padStart(2, '0');
}

const handleButton = () => {
  setInterval(() => {
   const difTimes = convertMs(timerId);
   seconds.innerHTML = addLeadingZero(difTimes.seconds);
   minutes.innerHTML = addLeadingZero(difTimes.minutes);
   hours.innerHTML = addLeadingZero(difTimes.hours);
   days.innerHTML = addLeadingZero(difTimes.days);
  },1000)
  
}

button.addEventListener("click", handleButton)

