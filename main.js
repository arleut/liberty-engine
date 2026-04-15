const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas. width = 800;
canvas.height = 600;

const player = {
  x: 100,
  y: 100,
  size: 50
};

let touchX = player.x;
let touchY = player.y;

canvas.addEventListener('touchmove', (e) => {
  const rect = canvas.getBoundingClientRect();
  touchX = e.touches[0].clientX - rect.left;
  touchY = e.touches[0].clientY - rect.top;
});

function gameLoop() {
  player.x += (touchX - player.x) * 0.1;
  player.y += (touchY - player.y) * 0.1;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(player.x, player.y, player.size, player.size);
  requestAnimationFrame(gameLoop);
}
gameLoop();