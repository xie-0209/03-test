const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const welcomeBox = document.getElementById('welcomeBox');
const welcomeText = document.getElementById('welcomeText');

submitBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (name === '') {
    alert('請輸入名字');
    return;
  }

  welcomeText.innerText = `歡迎你，${name} 👋`;
  welcomeBox.style.display = 'block';
});
