/**
 * 方法1 通过parseFloat()将入参进行转换 
 * 再通过isNaN()判断是否参数有效
 * 再通过toFixed(2)获得
 * Math.ceil()向上取整 Math.floor()向下取整
 */
function keepTwo(num){
    let n = parseFloat(num);
    if(isNaN(n)){
        console.log("参数有误");
        return;
    }
   return n.toFixed(2)
}

/**
 * Math.round()四舍五入
 * Math.random()随机数（0,1）
 */
function keepTwo2(num){
    let n = parseFloat(num);
    if(isNaN(n)){
        console.log("参数有误")
        return;
    }
    let m = Math.round(n*100)/100;// 1/100==0.01 10/100=0.1
    let str = m.toString();
    if(str.indexOf('.')<0){
        str +=".";
    }
    while(str.length <= str.indexOf('.')+2){
        str +="0"
    }
    return str;
}
keepTwo2(1)