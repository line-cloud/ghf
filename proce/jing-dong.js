
window.onload=function(){
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
    var hour=document.getElementsByClassName('hour')[0];
    var minute=document.getElementsByClassName('minute')[0];
    var second=document.getElementsByClassName('second')[0];
    var quick=document.getElementsByClassName('quick')[0];
    var bbo=document.getElementById('bbo');

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


    //$.ajax({
    //    url:'jongdong.php',
    //    dataType:'json',
    //    success:function(result){
    //        var zxc=-1;
    //        var ddo=-1;
    //        result.forEach(function(data){
    //            $.ajax({
    //                 url:'jongdong1.php',
    //                dataType:'json',
    //                data:{
    //                    did:data.sid
    //                },
    //                success:function(resu){
    //                    resu.forEach(function(dat){
    //                        zxc++;
    //                        $('.tui .tui1').eq(zxc).attr("src",dat.tui);
    //                        $('.tui .big1').eq(zxc).attr("src",dat.slogo);
    //                        $('.sheng').eq(zxc).attr("src",dat.lingdang);
    //                       $('.tui .fory').eq(zxc).html(dat.sname);
    //                       //console.log( $('.tui:eq(zxc) .fory').html())
    //                        $('.tui .dada').eq(zxc).html(dat.song);
    //                        $('.tui .ti').eq(zxc).html(dat.stime);
    //                        $('.tui .tii').eq(zxc).html(dat.smonth);
    //                        $('.min1').eq(zxc).html(dat.slogotitle);
    //                    })
    //                }
    //            });
    //            $.ajax({
    //                url:'jongdong2.php',
    //                dataType:'json',
    //                data:{
    //                    did:data.sid
    //                },
    //                success:function(r){
    //                    r.forEach(function(da){
    //                        ddo++;
    //                        $('.da .im').eq(ddo).attr("src",da.src);
    //                        $('.da .xia').eq(ddo).html(da.price);
    //                    })
    //                }
    //            })
    //        })
    //    }
    //})



};













