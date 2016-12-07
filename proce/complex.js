/**
 * Created by gguo on 2016/10/25.
 */
window.onload=function(){
var box=document.getElementById('box');
    var nul=document.getElementById('nul');
    nul.onclick=function(e){
        box.innerHTML='';
        $.ajax({
            url:'package.json',
            dataType:'json',
            success:function(result){
                var d=0;
                var b=0;
                var c=0;
                var arr=[];
                var arr1=[];
                result.forEach(function(data){
                    if(data.logo!=0){
                        arr.push(b);
                        arr1.push(c);
                        d++;
                        b=0;
                    }else{
                        b++;
                        c++;
                    }
                });
                arr.push(b);
                arr1.push(c);
                for(r=0;r<d;r++){
                    var dl=document.createElement('dl');
                    var dt=document.createElement('dt');
                    if(arr[r]==0){
                    dt.innerHTML=result[arr[r]].nam;
                    }else{
                        dt.innerHTML=result[arr1[r]+r].nam;
                    }
                    dl.appendChild(dt);
                    var dd=document.createElement('dd');

                    for(i=1;i<=arr[r+1];i++){
                        var a=document.createElement('a');
                        var img=document.createElement('img');
                        img.src=result[arr1[r]+i+r].src;
                        a.appendChild(img);
                        var span=document.createElement('span');
                        span.innerHTML=result[arr1[r]+i+r].nam;
                        a.appendChild(span);
                        dd.appendChild(a);
                    }
                    dl.appendChild(dd);
                    box.appendChild(dl);
                }
            },
            data:{
                did:e.target.dataset.index||1
            }
        })
    };
};
