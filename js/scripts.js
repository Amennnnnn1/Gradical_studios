const timezones = {
    shangai: "Asia/Shanghai",
    london: "Europe/London",
    newyork: "America/New_York",
    tokyo: "Asia/Tokyo",
    gradical: "Asia/Kolkata"
};

function getTime(timezone) {
    const date = new Date();
    const opt = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: timezone };
    const d_string = date.toLocaleString('en-GB', opt);
    return d_string;
}

function updateTime() {
    for (timezone of Object.keys(timezones)) {
        const time_string = getTime(timezones[timezone]);
        const element = document.querySelector(`#${timezone}`);
        element.textContent = time_string;
    }
}

window.setInterval(updateTime, 1000);