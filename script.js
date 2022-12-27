setInterval(setTime,1000);


const HourHand = document.querySelector('[data-hour-hands]');
const MinuteHand = document.querySelector('[data-minute-hands]')
const SecondHand = document.querySelector('[data-second-hands]')


function setTime(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds+ currentDate.getMinutes()) / 60
    const hours = (minutes+currentDate.getHours()) / 12

    setRotation(SecondHand, seconds)
    setRotation(MinuteHand, minutes)
    setRotation(HourHand, hours)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
    
}

