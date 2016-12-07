
    $(function(){
    var tgp=0;
    var check=true;
    function showx(){
        $('.show1').css('opacity', '1');
        $('.show2').css('left', '32%');
        $('.show3').css('left', '32%');
        $('.show4').css('left', '32%');
        $('.show5').css('left', '32%');
        $('.show6').css('left', '32%');
        $('.show7').css('left', '32%');
    }
    function showy(){
        $('.index2').css('opacity', '0');
        $('.show1').css('opacity', '0');
        $('.show2').css('left', '-520px');
        $('.show3').css('left', '105%');
        $('.show4').css('left', '-520px');
        $('.show5').css('left', '105%');
        $('.show6').css('left', '-520px');
        $('.show7').css('left', '105%');
    }
        $(document).mousemove(function(event){
            var e=window.event||event;
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue=false;
            }
        });
    $('#box').click(function(event){
        var e=window.event||event;
        e.preventDefault();
        if(!check){
            return
        }

        setTimeout(function(){
            check=true;
        },6000);
        tgp++;
        if (tgp == 1) {
            $('.welcome-left').css('opacity','0');
            $('.welcome-right').css('opacity','0');
            $('.bg-left').css('transform','rotateY(-90deg)');
            $('.bg-right').css('transform','rotateY(90deg)');
            setTimeout(function () {
                pox.style.display = 'none';
            }, 5000);
            setTimeout(function(){
                showx();
            },5000)
        }else if (tgp == 2) {
            showy();
            setTimeout(function () {
                $('.index2').css('display', 'none');
            }, 5000);
        }else if (tgp == 3) {
            $('.index3').eq(0).css('transform', 'scale(0)');
            $('#box').html('back Homepage');
        }else if (tgp == 4) {
            $('#pox').css('display', 'block');
            $('.index2').css('display','block');
            $('.welcome-left').css('left','30%');
            $('.welcome-right').css('left','28%');
            setTimeout(function(){
                $('.welcome-left').css('opacity','1').html('Thank you for reading my resume');
                $('.welcome-right').css('opacity','1').html('looking forward to working with you')
                $('#box').html('next Page');
                ;
            },3200);
            setTimeout(function(){
                $('.bg-left').css('transform','rotateY(0deg)');
                $('.bg-right').css('transform','rotateY(0deg)');
            },20);
            setTimeout(function(){
                $('.index2').css('opacity','1');
                $('.index3').css('transform', 'scale(1)');
            },5050);
            tgp =0;
        }
        check=false;
    });
        waterLeft.onclick=function(e){
            var span=document.createElement('span');
            span.className='doc';
            span.style.width=20+'px';
            span.style.height=20+'px';
            span.style.opacity='0';
            setTimeout(function(){
                span.style.opacity='1';
                span.style.left= e.clientX-473+'px';
                span.style.top= e.clientY-107+'px';
                span.style.transform = "scale(44)";
            },1);
            waterLeft.appendChild(span);
            setTimeout(function(){
                span.style.display='none'
            },1100)
        }
    });


