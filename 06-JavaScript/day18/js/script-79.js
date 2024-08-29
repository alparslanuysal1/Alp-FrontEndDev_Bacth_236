const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", (e) => {
    e.preventDefault(); // formun submit davranisini iptal eder

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");

    try { /* hata olmasini bekledigimiz kisim buraya yazilir. */
        const email = txtEmail.value;
        const password = txtPassword.value;

        if (!email || !isEmail(email)) {
            txtEmail.focus();
            throw new Error("Eposta adresinizi giriniz"); /* throw new Error yeni hata firlatir ve kodlarin calismasi durur catch e gider */
        }

        if (!password) {
            txtPassword.focus();
            throw new Error("Password giriniz");
        }
        
        e.target.submit(); /* yukarida iptal ettigimiz submit davranisini burada yaptiriyoruz */

    } catch (err) {
        console.log(err);
        alert(err.message);
    }
});


const isEmail = (email) => { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* chat gpt ile olusturuldu. Bu kaliba uyarsa true, uymazsa false dondurur */
    return emailRegex.test(email)
}