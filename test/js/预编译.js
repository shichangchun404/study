//预编译（函数执行前一刻）创建函数执行上下文
/**
 * step1 创建AO对象 AO{}
 * step2 函数体内找形参与变量申明（重复的只要一个，无关if条件） 将变量和形参名作为AO对象属性名 值为undefined
 * step3 将实参与形参统一
 * step4 在函数体内找函数申明 值赋予函数体
 */

/*
GO{
    //test:undefined,   step2
    test:function test(){...} step4

}
*/
 console.log(test);//function
 function test(test){
    console.log(test);//function
    var test = 123;
    console.log(test); //123
    function test(){

    }
 }
 /*
  AO{
    //test:undefined,step2
    //test:111, step3
    test:function test(){},step4
  }
  */
 test(111);
 var test = 222;
