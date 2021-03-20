const dark = document.getElementById('dark');
const light = document.getElementById('light');

const digitalClock = document.getElementById('digital-clock');
const analogClock = document.getElementById('analog-clock');
const today = document.getElementById('today');
const date = document.getElementById('date');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const centre = document.getElementById('centre');

dark.addEventListener('click', () => {
    changeColour();
    dark.style.display = 'none';
    light.style.display = 'block';
})

light.addEventListener('click', () => {
    changeColour();
    dark.style.display = 'block';
    light.style.display = 'none';
})

function changeColour() {
    document.body.classList.toggle('dark-mode');
    date.classList.toggle('dark-mode');
    hour.classList.toggle('dark-mode');
    minute.classList.toggle('dark-mode');
    centre.classList.toggle('dark-mode');
}

function timer() {

    let getDate = new Date();
    let whatDay = getDate.toLocaleDateString('en-US', {weekday: 'long'});
    let whatMonth = getDate.toLocaleDateString('en-US', {month: 'short'})
    let whatDate = getDate.getDate();
    let whatTime = getDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
    let whatHour = getDate.getHours();
    let whatMinute = getDate.getMinutes();
    let whatSecond = getDate.getSeconds();
    let milliseconds = getDate.getMilliseconds();
    
    let offset = -90;

    whatSecond += milliseconds / 1000 ;
    whatMinute += whatSecond / 60;
    whatHour += whatMinute / 60;

    if (whatHour > 12) {
        whatHour -= 12;
    }

    analogClock.style.setProperty('--hour', offset + (30 * whatHour) + 'deg');
    analogClock.style.setProperty('--minute', offset + (6 * whatMinute) + 'deg');
    analogClock.style.setProperty('--second', offset + (6 * whatSecond) + 'deg');

    digitalClock.textContent = whatTime;
    today.textContent = `${whatDay}, ${whatMonth}`
    date.textContent = whatDate;

    requestAnimationFrame(timer);
}

window.requestAnimationFrame(timer);