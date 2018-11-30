//封装cookie
function setcookie(key,value,num){
    var d=new Date();
    d.setDate(d.getDate()+num);
    document.cookie=key+'='+value+";expires="+d
}
//setcookie(1,1,3)
function remove(key){
    setcookie(key,1,-1)
}
function getcookie(key){
    var mycookie=document.cookie;
    var arr=mycookie.split('; ')
    for(var i=0;i<arr.length;i++){
        if(arr[i].split('=')[0]==key){
            return arr[i].split('=')[1]
        }
    }
    return;
}
   
