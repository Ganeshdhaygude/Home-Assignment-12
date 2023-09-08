const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');
const maxChar = document.getElementById('maxChar');
const remainingLabel = document.getElementById('remainingLabel');

textarea.addEventListener('input', () => {
  const text = textarea.value;
  const remainingChars = 50 - text.length;
  charCount.textContent = text.length;
  maxChar.textContent = remainingChars;
  remainingLabel.textContent = `Remaining Characters:`;
});