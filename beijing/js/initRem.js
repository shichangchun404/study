window.onload = function(){
    const baseWidth = 750;//设计稿是多少 给多少 方便后面像素赋值
    const clientWidth = document.documentElement.clientWidth||document.body.clientWidth;
    const fontSize = clientWidth/baseWidth * 100 + "px";
    document.documentElement.style.fontSize = fontSize ;
    console.log("HTML fontSize is "+fontSize);
}