const container = document.getElementById('box-container');

for (let i = 1; i <= 4; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = `Box ${i}`;
  container.appendChild(box);
}