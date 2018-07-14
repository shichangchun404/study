/*var obj1 ={
    "2":"a",
    "3":"b",
    "length" : 2,
    "push": Array.prototype.push
}
obj1.push("c");
console.log(obj1);
obj1.push("d");
console.log(obj1);
*/

/*
Array.prototype.push=function(obj){
    this[this.length] = obj;
    return this.length;
}
var arr = [1,2,3];
arr.push("44");
console.log(arr);*/

/*
var ar = [10,2,25,3,15];
ar.sort()
// [10, 15, 2, 25, 3]

ar.sort(function(a,b){
	return a-b
});
//[2, 3, 10, 15, 25]

/**随机打乱 */
/*ar.sort(function(a,b){
	return Math.random()-0.5
});*/
//每次输出结果随机

//slice(n,m) 从原数组中获取下标n到m的数组 
//slice() slice(n) slice(n,m)
//不改变原数组
/*
var a = ['a','b','c','d','e'];
var b = a.slice(2,4);
console.log(a);
console.log(b);

Array(5) ["a", "b", "c", "d", "e"]
Array(5) ["a", "b", "c", "d", "e"]
Array(2) ["c", "d"]*/

//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
//splice(index,num,[arr])
//该方法会改变原始数组。
// var a = ['a','b','c','d','e'];
// var b = a.splice(2,4,"shicc");
// console.log(a);
// console.log(b);

//split('XX') 将字符串通过‘XX’分割成数组
// var a = "2552XX5645XX2566XX689XX".split("XX");
// console.log(a);
// Array(5) ["2552", "5645", "2566", "689", ""]

// function twoSort(arr){
//     //最后当数组长度只有一的时候，不再往下执行
//     if (arr.length<=1) {
//         return arr;
//     }
//     var middle = arr.splice(Math.floor(arr.length/2),1);
//     var leftArr = [];
//     var rightArr = [];
//     for(var i=0; i<arr.length; i++){
//            if(parseInt(arr[i]) <= middle[0]){
//                leftArr.push(arr[i]);       //把比中间值小的放一个数组
//            }else{
//                rightArr.push(arr[i]);      //把比中间值大的放另一个数组
//            }
//         }
//         //concat() 方法用于连接两个或多个数组。
//         //再对小数组继续回调上面的分组方法
//     return twoSort(leftArr).concat(middle,twoSort(rightArr));
//     }
//     var arr = [565,77,89,45,34,12,65,31,121];
//     var nowArr = twoSort(arr);
//     console.log(nowArr)





/*二分法排序*/
function to2fen(a){
    if(a.length <= 1){
        return a;
    }
    var mid = a.splice((Math.floor(a.length)/2),1);//Math.floor()向下取整 Math.ceil(0.1)=1向上取整
    var l = [];
    var r = [];
    for(var i = 0;i<a.length;i++){
        if(a[i] <= mid[0]){
            l.push(a[i]);
        }else{
            r.push(a[i]);
        }
    }
    return to2fen(l).concat(mid,to2fen(r))
}
var arr = [10,25,6,35,58,47,92,5];
var asort = to2fen(arr);
console.log(asort);


/**数组去重 */
Array.prototype.quchong = function(){
    var obj = {},
        arr = [];
    var len = this.length;
    for(var i=0;i<len;i++ ){
        if(!obj[this[i]]){
            obj[this[i]]=1;
            arr.push(this[i]);
        }
    }
    return arr;
}


/** */
function to2(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = arr.splice(Math.floor(arr.length/2),1);
    let left = []
    let right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=mid[0]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return to2(left).concat(mid,to2(right))
}
var a = [15,65,42,78,487,12,36];
to2(a)
