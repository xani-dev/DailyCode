const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
	const username = userNameInput.value;
	const password = passwordInput.value;

	console.log(`Username: ${username}, Password: ${password}`);
});
