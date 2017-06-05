const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 256;
canvas.height = 256;

const player = new Player(ctx);

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 37) player.left();
  if (e.keyCode == 38) player.up();
  if (e.keyCode == 39) player.right();
  if (e.keyCode == 40) player.down();
});
