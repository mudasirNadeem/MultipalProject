function timeseting() {
    const secondElement = document.getElementById('Second');
    const now = new Date();
    const second = now.getSeconds();
    secondElement.textContent = second;
    const mintElement = document.getElementById('Minutes');
    const Minutes = now.getMinutes();
    mintElement.textContent = Minutes;
    const hoursElement = document.getElementById('hours');
    const hours = [now.getHours() % 12 ||  12 ];
    hoursElement.textContent = hours;
    const meridian = now.getHours() >= 12 ? "PM" : "AM"; // Determining AM/PM
    document.getElementById('timespent').textContent = meridian;
  }
  setInterval(timeseting, 60);