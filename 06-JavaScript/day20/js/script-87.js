const ocPrivacy = new bootstrap.Offcanvas("#ocPrivacy"); // bootstrap'in bize imkan verdigi bu yontemle ofcanvasi sectigimiz icin asagidaki show() metodunu kullanabiliyoruz
const isPrivacyPolicy = localStorage.getItem("privacy-policy");
if (!isPrivacyPolicy) ocPrivacy.show(); // show methodu bootstrapin bize kullandirdigi ilk satirdaki secme yontemini kullanirsak calisir

document.getElementById("btnAcceptPrivacy").addEventListener("click", () =>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
});