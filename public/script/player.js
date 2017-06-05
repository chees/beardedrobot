class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 128;
    this.y = 128;
  }

  up() {
    this.y--;
    this.draw();
  }
  right() {
    this.x++;
    this.draw();
  }
  down() {
    this.y++;
    this.draw();
  }
  left() {
    this.x--;
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 1, this.y + 1);
    ctx.stroke();
  }
}
