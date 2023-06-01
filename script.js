function generatePassword() {
    const length = document.getElementById("password-length").value;
    const uppercase = document.getElementById("uppercase-letters").checked;
    const lowercase = document.getElementById("lowercase-letters").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
  
    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById("password").value = password;
  }
  
  
  function copyToClipboard() {
    const password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
  }
  
  function copyToClipboard() {
    const password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }



// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');
// const clipboard = document.getElementById('clipboard');

// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol
// }

// clipboard.addEventListener('click', () => {
// 	const textarea = document.createElement('textarea');
// 	const password = resultEl.innerText;
	
// 	if(!password) { return; }
	
// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.execCommand('copy');
// 	textarea.remove();
// 	alert('Password copied to clipboard');
// });

// generate.addEventListener('click', () => {
// 	const length = +lengthEl.value;
// 	const hasLower = lowercaseEl.checked;
// 	const hasUpper = uppercaseEl.checked;
// 	const hasNumber = numbersEl.checked;
// 	const hasSymbol = symbolsEl.checked;
	
// 	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
// });

// function generatePassword(lower, upper, number, symbol, length) {
// 	let generatedPassword = '';
// 	const typesCount = lower + upper + number + symbol;
// 	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
// 	// Doesn't have a selected type
// 	if(typesCount === 0) {
// 		return '';
// 	}
	
// 	// create a loop
// 	for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
	
// 	const finalPassword = generatedPassword.slice(0, length);
	
// 	return finalPassword;
// }

// function getRandomLower() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
// 	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
// 	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	return symbols[Math.floor(Math.random() * symbols.length)];
// }

