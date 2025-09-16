document.addEventListener('keydown', (event) => {
  document.getElementById('keydown-output').innerText = `The key has been pressed (keydown): ${event.key}`;
});

document.addEventListener('keypress', (event) => {
  document.getElementById('keypress-output').innerText = `The key has been pressed (keypress): ${event.key}`;
});

document.addEventListener('keyup', (event) => {
  document.getElementById('keyup-output').innerText = `The key has been released (keyup): ${event.key}`;
});