const inputValue = document.getElementById('text-input');
const resultValue = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

function isPalindrome(text) {
  const reverseText = text.split('').reverse().join('');
  return text.toLowerCase() === reverseText.toLowerCase();
}

function checkPalindrome() {
  if (inputValue.value === '') {
    alert('Please input a value');
  } else {
    resultValue.innerText = isPalindrome(
      inputValue.value.replace(/[^0-9a-z]/gi, '')
    )
      ? `${inputValue.value} is a palindrome`
      : `${inputValue.value} is not a palindrome`;
  }
}

checkButton.addEventListener('click', checkPalindrome);
