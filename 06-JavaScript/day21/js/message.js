const showAlert = (msg) => {
	alert(msg);
};

const showConfirm = (msg) => {
	return confirm(msg);
};

const showPrompt = (msg) => {
	return prompt(msg);
};

const setMessage = () => {
	// private function
};

export default showAlert;
export { showConfirm, showPrompt };