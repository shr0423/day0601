class Rect {
    constructor(container, x, y, width,height,bg) {
        //this가 붙여진 변수들을 가리켜 멤버변수라 하며
        //멤버변수는 객체의 소유이므로, 접근하려면
        //객체.변수 방식으로 접근한다..
        this.container = container;
        this.div;
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.bg = bg;

        this.div = document.createElement("div");
        this.div.style.width = 100 + "px";
        this.div.style.height = 100 + "px";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.background=this.bg;
        this.container.appendChild(this.div);
        this.div.innerText="x="+this.x+"\ny="+this.y;

        //div 에  클릭이벤트연결
        this.div.addEventListener("click",function(){
            flag=true;
        });
    }
    move(){
        //좌표출력
        this.div.innerText="x="+this.x+"\ny="+this.y;

        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }

}