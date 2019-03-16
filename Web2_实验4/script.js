var pic=document.getElementById('picScroll');
var pic1=document.getElementById('picScroll1');
var pic2=document.getElementById('picScroll2');
pic2.innerHTML=pic1.innerHTML;
var srco=0;
function changeToleft()
{
	if(srco>pic1.offsetWidth)srco=0;
	srco++;
	pic.scrollLeft=srco;
};
var t=setInterval(changeToleft,10);
pic.onmouseout=function(){
    t=setInterval(changeToleft,10);
};
pic.onmouseover=function (){
    clearInterval(t);
};