
function calculate() {

    let num = Number(document.querySelector(".num").value);
    let counter = 0 /* sayac=counter olusturmak lazim */

    if (num > 1 && Number.isInteger(num)) { //num 1den buyuk ve tam sayi ise iceri gir
        for (let i = 2; i < num; i++) {
            /* bolumunden kalani alacagiz */
            if (num % i == 0) {
                counter++; //counter=> yani sayac sifirdan buyuk olursa asal degildir
            }
        }// bundan sonra for disina cikmamiz lazim

        counter == 0 ? alert(num + " Asal Sayidir") : alert(num + " Asal Degildir");
    }
    else {
        alert("Lutfen gecerli bir sayi giriniz");
    }
}
/////////////////////
var text = "Hello";
console.log(text[1]);
console.log(text.charAt(4));