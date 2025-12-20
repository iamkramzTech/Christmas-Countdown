"use strict";
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
function BeginChristmasCountdown() {
    // Exit early if any required element is missing
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentDay = now.getDate();
    // Figure out the year that the next Christmas will occur on
    let nextChristmasYear = now.getFullYear();
    if (currentMonth === 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }
    const nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
    const ChristmasDate = new Date(nextChristmasDate).getTime();
    // Find the distance between now and the Christmas date
    let distance = ChristmasDate - Number(now);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    //Don't calculate the distance if it is Christmas day
    if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}
setInterval(BeginChristmasCountdown, 1000);