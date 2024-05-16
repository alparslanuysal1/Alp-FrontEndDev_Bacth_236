/* const lblHour = document.querySelector("#clock li:first-child");
const lblMinute = document.querySelector("#clock li:last-child");
const lblSecond = document.querySelector("#clock li:nth-child(2)"); */

const clockItems = document.querySelectorAll("#clock li");
const clock = document.querySelector("#clock");

let timer = null;
let flag = true;

const startClock = () => {
    timer = setInterval(() => {
        const dateTime = new Date();
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();

        clockItems[0].innerHTML = hour.toString().padStart(2,"0"); // padStart ile ilk parametrede kac hane olacagini. iki hane bilgi gelmezse ikinci parametrede basa ne koyacagini belirtiyoruz. padStart kullanmak icin string veriye cevirmemiz lazim.
        clockItems[2].innerHTML = minute.toString().padStart(2, "0");
        clockItems[1].classList.toggle("hidden"); // toggle varsa cikar yoksa ekle demektir

        //ilk baslangictaki gecikmeden dolayi saatin icinin bos gorunmesini engelledik
        if (flag) {
            clock.classList.remove("hidden");
            flag = false;
        }

    },1000) // saniyede bir kez calisacak
}

startClock();

const stopClock = () => {
    clearInterval(timer)
};

window.addEventListener("beforeunload", () => { // beforeunload => kapatmadan once demektir
    stopClock();
    timer = null; //hafizadaki timer icine attigimizobjeyi sifirlariz ki tekrar actigimizda  
}); //addEventListener=> olaylari izle demektir