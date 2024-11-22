let button = document.getElementById('startButton');
let circle = document.getElementById('circle');
let flash = document.getElementById('flash');

button.addEventListener('click', function() {
  // Change background to a soft, calm color
  document.body.style.backgroundColor = getRandomColor();
  
  // Randomize flash intensity and circle bounce
  flash.style.animationDuration = `${Math.random() * 1.5 + 2}s`;
  circle.style.animationDuration = `${Math.random() * 1.5 + 2}s`;

  // Create new random circles with soft animations
  for (let i = 0; i < Math.random() * 3 + 1; i++) {
    createCircle();
  }

  // Smoothly hide and show button
  button.style.pointerEvents = 'none';
  setTimeout(() => {
    button.style.pointerEvents = 'auto';
  }, 1000);
});

function getRandomColor() {
  const colors = ['#e3f2fd', '#fff9c4', '#c8e6c9', '#fce4ec', '#ffecb3'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createCircle() {
  let newCircle = document.createElement('div');
  newCircle.style.position = 'absolute';
  newCircle.style.width = `${Math.random() * 40 + 30}px`;
  newCircle.style.height = newCircle.style.width;
  newCircle.style.backgroundColor = getRandomColor();
  newCircle.style.borderRadius = '50%';
  newCircle.style.top = `${Math.random() * window.innerHeight}px`;
  newCircle.style.left = `${Math.random() * window.innerWidth}px`;
  newCircle.style.animation = 'float 4s ease-in-out infinite';

  document.body.appendChild(newCircle);

  setTimeout(() => {
    newCircle.remove();
  }, 4000); // Remove circle after 4 seconds
}
