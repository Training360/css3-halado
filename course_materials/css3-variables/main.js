document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(updateTime);
    // console.log('frame requested');
}
)

function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
    requestAnimationFrame(updateTime);
        
    /* console.log('frame requested');
    const to = setTimeout( () => {
        clearTimeout(to);
        requestAnimationFrame(updateTime);
        console.log('frame requested');
    }, 1000); */
}