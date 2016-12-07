/**
 * Created by gguo on 2016/10/27.
 */
window.onload=function(){
    var bbq=document.getElementsByClassName('bbq')[0];
    $('.zhu').click(function(){
        $('#asd').css('display','block');
        $('#dsa').css('display','none');
        $('.west').html('京东注册')

        }
    );
    $('#ppo').click(function(){
        $.ajax({
            url:'zhuce.php',
            data:{
                use:$('#asd .box').eq(1).val(),
                pas:$('#asd .box').eq(3).val()
            }

        })
    });

$('.pox').eq(0).click(function(){
    $.ajax({
        url:'denglu.php',
        success:function(result){
            console.log(result)
              if(result==1){

                  //open('http://localhost:63342/PHp/zz-Project-jing-dong/zz-Project-jing-dong.html')
                  location.assign("../zz-Project-jing-dong.html")
              }else if(result==2){
                  alert('您输入的密码错误')
              }else if(result==3){
                  alert('您输入的用户名不存在')

              }
        },
        data:{
            use:$('#dsa .box').eq(0).val(),
            pas:$('#dsa .box').eq(1).val()
        }




    })






})






};

