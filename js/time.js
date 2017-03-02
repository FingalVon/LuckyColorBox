/**
 * Created by King on 2017/2/10.
 */
//获取时间
var today = new Date();
var date = today.getDate();
/*var day ;
switch(today.getDay()){
    case 1:day = "星期一";break;
    case 2: day="星期二"; break;
    case 3: day="星期三"; break;
    case 4: day="星期四"; break;
    case 5: day="星期五"; break;
    case 6: day="星期六"; break;
    default: day="星期日";
}*/
var month = today.getMonth();
var year = today.getFullYear();
var hours = add_zero(today.getHours());
var minutes = add_zero(today.getMinutes());
document.write(year+"/"+month+"/"+date+"/ "+"  "+hours+":"+minutes+"<br />");
function add_zero(temp)
{
    if(temp<10) return "0"+temp;
    else return temp;
}
setInterval("getCurDate()",100);
