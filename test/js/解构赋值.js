/**数组 */
{
    let [a,b,c] = ["11","22","33"];
    console.log(a)//11
}

/**对象 */
{
    let obj = {};
    obj.name = "shic";
    obj.id = "1992";
    let {name:n,id:i} = obj;
    console.log(n)//shicc
}
/**扩展运算符+解构赋值 对对象和数组 深度拷贝（不同对象）*/
{
    let obj = {};
    obj.name = "shic";
    obj.id = "1992";
    let {...o2} = obj
    console.log(o2)
    o2.city = "aq";
    console.log(o2)
    console.log(obj)
    console.log("******************")
    let name,id;
    ({name,id} = obj)
    console.log(name)
}
{
    let a1 = [1,2,3];
    let [...a2] = a1;
    console.log(a2)
    a2.push("555");
    console.log(a1);
    console.log(a2)
}