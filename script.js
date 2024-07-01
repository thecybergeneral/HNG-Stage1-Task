document.addEventListener('DOMContentLoaded', () => {
    // Display the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        document.getElementById('utc-time').textContent = utcTime;
    }

    // Display the current day of the week
    function updateDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getDay()];
        document.getElementById('current-day').textContent = currentDay;
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
});
