window.onload=function() {
    new Swiper('.img-container', {
        loop: true,
        autoplay: 3000,
        //页码生成的容器
        pagination: '.swiper-pagination',
        //可点击页码
        paginationClickable: true,
        //paginationHide: true
        paginationBulletRender: function (index, cname) {
            return '<span class="' + cname + '">' + '</span>'
        }
    });
    var conall=document.getElementById('conall');
    var cont=document.getElementsByClassName('img-container')[0];
    var hour=document.getElementsByClassName('hour')[0];
    var minute=document.getElementsByClassName('minute')[0];
    var second=document.getElementsByClassName('second')[0];
    var quick=document.getElementsByClassName('quick')[0];
    var bbo=document.getElementById('bbo');
    conall.onclick=function(){
        window.location='homework.html'
    };
cont.onclick=function(){
    window.location='proj2.html'
};
    var i=59;
    var b=59;
    var c=3;
    function time(){
        if(i==0){
            b--;
            i=59;
        }
        if(b==0){
            c--;
            b=59;
            i=59;
        }
        if(c==0){
            i=59;
            b=59;
            c=3
        }
        hour.innerHTML=c;
        minute.innerHTML=b;
        second.innerHTML=i;
        i--;
    }
    setInterval(function(){
        time()
    },1000);
    var qq=10;
    setInterval(function(){
        quick.src="img/"+qq+".jpg";
        qq++;
        if(qq==13){
            qq=10;
        }
    },3000);
};