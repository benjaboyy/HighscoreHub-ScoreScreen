  
var sts = $('.box');
    var scroller = setInterval(function(){
        var pos = sts.scrollTop();
        sts.scrollTop(++pos);
        //console.log('the SCROLL is here');        
    }, 25);
     sts.bind('scroll', function(){
        if(sts.scrollTop() + sts.innerHeight() >= sts[0].scrollHeight){
            //console.log('the if is here')
            //clearInterval(scroller);
            sts.animate({ scrollTop: 0 }, 1200);
        }
     });
