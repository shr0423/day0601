/*총알을 정의한다. */
class Bullet {
    constructor(container, x, y, width, height, velX, velY) {
        this.container = container;
        this.div;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX; //총알의 속도
        this.velY = velY;

        this.div = document.createElement("div");
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.background = "red";
        this.div.style.borderRadius = 50 + "%";

        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        this.container.appendChild(this.div);
    }
    move() {
        //실제 총알을 움직일지 여부를 결정짓는 변수는 velX,velY
        this.x+=this.velX;
        this.y+=this.velY;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

    }
}