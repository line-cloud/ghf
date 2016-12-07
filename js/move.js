/**
 * Created by gguo on 2016/9/19.
 */

function getstyle(obj,attr,fn){            //获取行外样式且具备兼容
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }else{
        return getComputedStyle(obj,null)[attr]
    }
}
var bb=null;
function remove(obj,json,fn){
    clearInterval(obj.bb);
    var speed;
    var cc=true;
    obj.bb=setInterval(function(){
        for(var attr in json){
            if(parseInt(getstyle(obj,attr))>=json[attr]){
                speed=Math.floor((json[attr]-parseInt(getstyle(obj,attr)))/20);
                obj.style[attr]=parseInt(getstyle(obj,attr))+speed+'px';
            }else{
                speed=Math.ceil((json[attr]-parseInt(getstyle(obj,attr)))/20);
                obj.style[attr]=parseInt(getstyle(obj,attr))+speed+'px';

            }
            if(json[attr]!=parseInt(getstyle(obj,attr))){
                cc=false;
            }
        }
        if(cc){
            clearInterval(obj.bb);
            if(fn){
                fn();
            }}
    },30)

}



//alert('ddd')

/**
 * Created by gguo on 2016/9/22.
 */
