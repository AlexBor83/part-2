const timer = (dedLine) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(dedLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      timeRemaining,
    };
  };

  const getZero = () => {
    let getTime = getTimeRemaining();

    if (timerDays.textContent.length === 1) {
      timerDays.textContent = '0' + timerDays.textContent;
    }

    if (timerHours.textContent.length === 1) {
      timerHours.textContent = '0' + timerHours.textContent;
    }

    if (timerMinutes.textContent.length === 1) {
      timerMinutes.textContent = '0' + timerMinutes.textContent;
    }

    if (timerSeconds.textContent.length === 1) {
      timerSeconds.textContent = '0' + timerSeconds.textContent;
    }
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    // console.log(typeof getTime.hours);

    if (getTime.timeRemaining > 0) {
      timerDays.textContent = getTime.days;
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }

    getZero();
  };

  setInterval(updateClock, 1000);
};

export default timer;
