/**
 * Created by gguo on 2016/10/27.
 */
window.onload=function(){
    var body=document.getElementsByTagName('body')[0];
$('.logo').click(function(){
    location.assign('denglu.html');
})
    $.ajax({
        url:'session.php',
        //dataType:'json',
        success:function(result){
            console.log(  result);
            if(result){
                $('.nam').html(result);
                $('.zhuxiao').css('display','block')
            }
        }
    });
    $('.zhuxiao').click(function(){
        $.ajax({
        url:'zhuxiao.php',
        success:function(res){
            $('.zhuxiao').css('display','none');
            $('.nam').html('注册/登录')
        }


        })
    })

};