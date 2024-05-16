const ocPrivacy = new bootstrap.Offcanvas("#ocPrivacy");
const isPrivacyPolicy = localStorage.getItem("privacy-policy");
if (!isPrivacyPolicy) ocPrivacy.show(); // show methodu bootstrapin bize kullandirdigi ilk satirdaki secme yontemini kullanirsak calisir

document.getElementById("btnAcceptPrivacy").addEventListener("click", () =>{
    localStorage.setItem("privacy-policy", true);
    ocPrivacy.hide();
});