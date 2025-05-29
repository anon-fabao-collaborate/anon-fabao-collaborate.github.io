// Set the target date
const EVENT_START = new Date('2025-06-28Z04:00:00');
const EVENT_END = new Date('2025-06-28Z14:00:00');

function updateTime() {
    const now = new Date();

    if (EVENT_START <= now && now <= EVENT_END) {
        document.getElementById('left-hint').innerText = '';
        document.getElementById('time').innerHTML = 
        `<font color="darkgreen">活動進行中</font>`;

        return;
    }

    if (now > EVENT_END) {
        document.getElementById('left-hint').innerText = '';
        document.getElementById('time').innerHTML = 
        `<font color="darkred">活動已結束</font>`;

        return;
    }

    const timeLeft = EVENT_START - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('time').innerText = 
        `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
}

const interval = setInterval(updateTime, 1000);
updateTime();