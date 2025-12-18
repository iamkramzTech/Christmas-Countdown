const { body } = document;
const daysElement : any = document.getElementById("days");
const hoursElement : any = document.getElementById("hours");
const minutesElement : any = document.getElementById("minutes");
const secondsElement : any = document.getElementById("seconds");


function BeginChristmasCountdown() {

    const now : any = new Date();
    const currentMonth : number = now.getMonth() + 1;
    const currentDay : number = now.getDate();

    // Figure out the year that the next Christmas will occur on
    let nextChristmasYear = now.getFullYear();
    if (currentMonth === 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }

    const nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
    const ChristmasDate = new Date(nextChristmasDate).getTime();

    // Find the distance between now and the Christmas date
    let distance : number = ChristmasDate - now;
    let days : number = 0;
    let hours : number = 0;
    let minutes : number = 0;
    let seconds : number = 0;

    //Don't calculate the distance if it is Christmas day
    if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
        // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
    daysElement.textContent = days < 10 ? `0${days}` : days;
    hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;



}

setInterval(BeginChristmasCountdown, 1000);
