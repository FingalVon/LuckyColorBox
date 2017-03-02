$(document).ready(function(){
    //旋转角度
    var angles;
    //旋转次数
    var rotNum = 0;
    //指针位置
    var num = 0;
    //转盘初始化
    var color = ["#8F77B5","#71C671","#0089A7","#FEDFE1","#FBE251","#FB9966","#3A8FB7","#FFD5B7","#F08080","#787878","rgba(0,0,0,0.5)","rgb(153,102,51)","#C6E2FF"];
                //紫苑0       微草1      青兰2       樱 3      菊黄4      望兰橙5     泣兰6      浅霞7
    var info = " ";
    var info1 = ' ';
    num = parseInt(Math.random()*8);
    document.bgColor = color[num];
    canvasRun();
    $('#rtnhome').fadeOut();
    $('#tupBtn').bind('click',function(){
            //转盘旋转
            runCup();
            //转盘旋转过程按钮无法点击
            $('#tupBtn').attr("disabled", true);
            //旋转次数加一
            rotNum = rotNum + 1;
            //按钮恢复点击
            setTimeout(function(){
               // alert(notice);
                //document.write(num);
                document.bgColor = color[num];
                $('#tupBtn').removeAttr("disabled", true);
            },6000);
            setTimeout(function(){
                $('#wlc').fadeOut(1500);
                $('#luckyWheel').fadeOut(1500);
            },7000);
            setTimeout(function(){
                if(num==0){
                    $('#color0').fadeIn(1500);
                }
                if(num==1){
                    $('#color1').fadeIn(1500);
                }
                if(num==2){
                    $('#color2').fadeIn(1500);
                }
                if(num==3){
                    $('#color3').fadeIn(1500);
                }
                if(num==4){
                    $('#color4').fadeIn(1500);
                }
                if(num==5){
                    $('#color5').fadeIn(1500);
                }
                if(num==6){
                    $('#color6').fadeIn(1500);
                }
                if(num==7){
                    $('#color7').fadeIn(1500);
                }
                $('#rtnhome').fadeIn(1500);
            },8600);
    });

    //返回按钮
    $('#rtn').bind('click',function(){
        returnHome();

        function returnHome() {
            if (num == 0) {
                $('#color0').fadeOut(1500);
            }
            if (num == 1) {
                $('#color1').fadeOut(1500);
            }
            if (num == 2) {
                $('#color2').fadeOut(1500);
            }
            if (num == 3) {
                $('#color3').fadeOut(1500);
            }
            if (num == 4) {
                $('#color4').fadeOut(1500);
            }
            if (num == 5) {
                $('#color5').fadeOut(1500);
            }
            if (num == 6) {
                $('#color6').fadeOut(1500);
            }
            if (num == 7) {
                $('#color7').fadeOut(1500);
            }
            $('#wlc').fadeIn(1500);
            $('#luckyWheel').fadeIn(1500);
            $('#rtnhome').fadeOut(1500);
            $('#tupBtn').removeAttr("disabled", true);
        }
    });

    //转盘旋转
    function runCup(){
        probability();
        var degValue = 'rotate('+angles+'deg'+')';
        $('#myCanvas').css('-o-transform',degValue);           //Opera
        $('#myCanvas').css('-ms-transform',degValue);          //IE浏览器
        $('#myCanvas').css('-moz-transform',degValue);         //Firefox
        $('#myCanvas').css('-webkit-transform',degValue);      //Chrome和Safari
        $('#myCanvas').css('transform',degValue);
    }

    function probability(){
        //获取随机数
        num = parseInt(Math.random()*8);
        //概率
        if ( num == 0 ) {
            angles = 2160 * rotNum + 1800;
          //  notice = info[0] + info1[0];
        }
        //概率
        else if ( num == 1 ) {
            angles = 2160 * rotNum + 1845;
            //notice = info[7] + info1[7];
        }
        //概率
        else if ( num == 2 ) {
            angles = 2160 * rotNum + 1890;
            //notice = info[6] + info1[6];
        }
        //概率
        else if ( num == 3 ) {
            angles = 2160 * rotNum + 1935;
            //notice = info[5] + info1[5];
        }
        //概率
        else if ( num == 4 ) {
            angles = 2160 * rotNum + 1980;
            //notice = info[4] + info1[4];
        }
        //概率
        else if ( num == 5 ) {
            angles = 2160 * rotNum + 2025;
            //notice = info[3] + info1[3];
        }
        //概率
        else if ( num == 6 ) {
            angles = 2160 * rotNum + 2070;
            //notice = info[2] + info1[2];
        }
        //概率
        else if ( num == 7 ) {
            angles = 2160 * rotNum + 2115;
            //notice = info[1] + info1[1];
        }
    }

    //绘制转盘
    function canvasRun(){
        var canvas=document.getElementById('myCanvas');
        var canvas01=document.getElementById('myCanvas01');
        var canvas03=document.getElementById('myCanvas03');
        var canvas02=document.getElementById('myCanvas02');

        var ctx=canvas.getContext('2d');
        var ctx1=canvas01.getContext('2d');
        var ctx3=canvas03.getContext('2d');
        var ctx2=canvas02.getContext('2d');

        createCircle();
        createCirText();
        initPoint();
        createRtn_btn();

        //绘制返回按钮
        function createRtn_btn(){
            var canvas04=document.getElementById('rtnCanvas');
            var ctx4=canvas04.getContext('2d');
            ctx4.beginPath();
            ctx4.arc(40,40,40,0,Math.PI*2,false);
            ctx4.fillStyle = color[11];
            ctx4.fill();
            ctx4.closePath();
            ctx4.font = "Bold 20px Microsoft YaHei";
            ctx4.textAlign='start';
            ctx4.textBaseline='middle';
            ctx4.fillStyle = color[12];
            ctx4.beginPath();
            ctx4.fillText('点我',20,25,40);
            ctx4.fillText('返回',20,55,40);
            ctx4.fill();
            ctx4.closePath();
        }



        //外圆
        function createCircle(){
            var startAngle = 0;//扇形的开始弧度
            var endAngle = 0;//扇形的终止弧度
            //画一个8等份扇形组成的圆形
            for (var i = 0; i< 8; i++){
                startAngle = Math.PI*(i/4-1/8);
                endAngle = startAngle+Math.PI*(1/4);
                ctx.save();
                ctx.beginPath();
                ctx.arc(150,150,100, startAngle, endAngle, false);
                ctx.lineWidth = 120;
                if(i==7)ctx.strokeStyle = color[7];
                else{ctx.strokeStyle =  color[6-i];}
                ctx.stroke();
                ctx.restore();
            }
        }

        //各颜色
        function createCirText(){
            ctx.textAlign='start';
            ctx.textBaseline='middle';
            ctx.fillStyle = color[3];
            var step = 2*Math.PI/8;
            for ( var i = 0; i < 8; i++) {
                ctx.save();
                ctx.beginPath();
                ctx.translate(150,150);
                ctx.rotate(i*step);
                ctx.font = " 20px Microsoft YaHei";
                ctx.fillStyle = color[3];
                ctx.fillText(info[0],-30,-115,60);
                ctx.font = " 14px Microsoft YaHei";
                ctx.fillText(info1[0],-30,-95,60);
                ctx.closePath();
                ctx.restore();
            }
        }

        function initPoint(){
            //箭头指针
            ctx1.beginPath();
            ctx1.moveTo(100,24);
            ctx1.lineTo(90,62);
            ctx1.lineTo(110,62);
            ctx1.lineTo(100,24);
            ctx1.fillStyle = color[8];
            ctx1.fill();
            ctx1.closePath();
            //中间小圆
            ctx3.beginPath();
            ctx3.arc(100,100,40,0,Math.PI*2,false);
            ctx3.fillStyle = color[8];
            ctx3.fill();
            ctx3.closePath();
            ctx3.font = "Bold 20px Microsoft YaHei";
            ctx3.textAlign='start';
            ctx3.textBaseline='middle';
            ctx3.fillStyle = color[4];
            ctx3.beginPath();
            ctx3.fillText(' ',80,90,40);
            ctx3.fillText(' ',80,110,40);
            ctx3.fill();
            ctx3.closePath();
        }
    }
});
