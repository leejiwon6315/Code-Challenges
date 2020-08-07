const clockTitle = document.querySelector("h2");

function getTime() {

  const xmasDay = new Date("december 24, 2020, 09:00:00");
  const nowTime = new Date();
  const date = xmasDay.getTime() - nowTime.getTime();
    
  const days = Math.ceil(date / (1000 * 60 * 60 * 24));
  const hours = Math.ceil((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.ceil((date % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.ceil((date % (1000 * 60)) / 1000);
    
  clockTitle.innerText =
        `${days <= 9 ? `0${days}`: days}d ${hours <= 9 ? `0${hours}`: hours}h ${minutes <= 9 ?`0${minutes}` : minutes}m ${seconds <= 9 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
