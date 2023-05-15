const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const welcome = document.getElementById('welcomeText')

submitBtn.addEventListener('click', () => {
	const username = userNameInput.value;
	const password = passwordInput.value;

    welcome.innerText=(`Welcome  ${username}!`)
	console.log(`Username: ${username}, Password: ${password}`);
});
