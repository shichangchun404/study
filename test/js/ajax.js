var client = new XMLHttpRequest();//ie低版本 ActiveXObject
client.open("GET", "http://ah.10086.cn/m");
client.send();
client.onreadystatechange = function(res){
    let readyState = res.target.readyState;
   if(res.target.status===200&&readyState===4){
       console.log('成功 readyState='+readyState)
   }else{
       console.log("readyState="+readyState)
   }
}