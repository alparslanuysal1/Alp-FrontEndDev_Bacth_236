const btn = document.getElementById("btn");
const lblResult = document.getElementById("lblResult");

btn.addEventListener("click", () => {
    let total = 0;
    for (let i = 0; i < 5; i++) {
        total += i + multiply(i);
    }
    lblResult.textContent = total;
});
const multiply = (num) => {
    let result = 0;
    if (num > 3) {
        result = num * 2;
    }
    return result;
};
