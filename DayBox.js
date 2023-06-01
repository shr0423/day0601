//요일정의
class DayBox{
    constructor(container,x,text){
        this.container=container;//부모요소
        this.div;//멤버변수(클래스가 보유한 변수)
        this.x=x;
        this.text=text;

        this.div=document.createElement("div");
        this.div.style.width=100+"px";
        this.div.style.height=50+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        
        this.div.innerText=this.text;
        this.div.style.textAlign="center";
        this.div.style.fontSize=25+"px";
        this.div.style.border="2px solid red";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div);
    }
}