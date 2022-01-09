export default class EnemyBullet {
  constructor(x, y) {
    this.x = x + 193;
    this.y = y + 11;
    this.speed = 2.5;
    this.harmLevel = 1;

    this.bulletHeight = 4;
    this.bulletWidth = 12;
  }
  draw(ctx) {
    this.x += this.speed;
    ctx.fillStyle = "#FCF4A3";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.fillRect(this.x, this.y, this.bulletWidth, this.bulletHeight);
    ctx.shadowBlur = 0;
  }
  isEnemyBulletCollision(player) {
    //   console.log(player.x);
    if (
      this.x > player.x + player.width &&
      this.x + this.width < player.x &&
      this.y > player.y + player.height &&
      this.y + this.height < player.y
    ) {
      player.decreaseHealth(1);
      return true;
    } else {
      return false;
    }
  }
}
