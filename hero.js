/*주인공 우주선 정의*/ 
class Hero{
    constructor(container,src,x,y,width,height){
        this.container=container;
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.velX=0;//최초에는 움직이지 않아야 하므로..0
        this.velY=0;
        this.width=width;
        this.height=height;
        
        //우주선의 스타일 속성
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //화면에 부착
        this.container.appendChild(this.img);
    }


    //우주선 움직이기
    move(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px"; 
    }
}