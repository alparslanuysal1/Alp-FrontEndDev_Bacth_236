import showAlert, { showConfirm, showPrompt} from "./message.js"

document.getElementById("btnAlert").addEventListener("click", () => {
    showAlert("Hello Alert")
})

document.getElementById("btnConfirm").addEventListener("click", () => {
    showAlert("Hello Confirm")
})

document.getElementById("btnPrompt").addEventListener("click", () => {
    showAlert("Hello Prompt")
})