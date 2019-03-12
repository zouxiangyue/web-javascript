# web2
javascript

一．	简介
1.	JavaScript是一种基于对象和事件驱动并具有安全性的脚本语言，解释性脚本语言，不用进行预编辑，用于与用户交互，实现页面中的动态效果;javascript是一种弱类型语言（变量的数据类型可以相互转换）
。有如下特点：
o	交互性
o	安全性（不可以直接访问本地硬盘）
o	跨平台性（只要是可以解析js的浏览器都可以执行，和平台无关）

2.<script  type=’text/javascript’></script>
  <script type=’text/javascript’ src=’demo.js’></script>
二．	基础语法
1.	document.write(‘<p>abc</p>’),document.write(‘abc’)
document.write(a>=b? "a大于等于b":"a小于b");
alert()
2.	html中注释<!--    -->
3.	变量名区分大小写，以字母或 _ 或$开头，不能是关键字，保留字
4.	5种原始数据类型：Nunber,String,Boolean,Undefined(只有一个值undefined),Null(只有一个值null)
5.	数据类型转换
（1）	转化为String类 用+，String()     //'a'-'b' //NaN
（2）	转化为Boolean ，！！或Boolean()
（3）	转化为Number
parseInt(),parseFloat(),Numner(),Number(‘abc’) //NaN

6.	选择分支语句：if else，switch  case	
7.	循环：for  while   do  while
8.	终止循环：continue，break
三．	函数与事件处理
 
事件处理：（1）
四．	String & Array
1.	String  var str=’abfkajdsn’
（1）	str.Length
（2）	str.substr(0,5)字符串截取//从0开始，长度为5
（3）	str.indexOf(‘a’,0)查找字符串 //从0开始,返回下标
2.	Array  arr=[1,2,3,’a’,’b’]
1.	arr=[….],arr1=new Array(1,2,3),  arr2=new Array(3)//长度为3
2.	arr.length
3.	arr.join()拼接数组为一个字符串
 
4.	push(),pop()破坏型
5.	arr.shift()删除并返回第一个元素，破坏型




6.	arr.unshift()删除并返回第一个元素，非破坏型
 
7.	遍历数组
For(var i=0;i<arr.length,i++)
Arr.forEach((v，index?)=>{console.log(v,index)})
五．	1.遍历对象属性：for(var i  in obj){ alert(obj[i])  }
3.	使用delete删除对象属性
六．	BOM
1.JavaScript的实现包括以下3个部分：
1）核心（ECMAScript）：描述了JS的语法和基本对象。为不同种类的宿主环境提供核心的脚本编程能力
2）文档对象模型 （DOM）：处理网页内容的方法和接口
3）浏览器对象模型（BOM）：与浏览器交互的方法和接口
2.Bom中对象引用
  (1)Window.open(),Window.close(),Window.document.write()
 
  (2)document.forms[0].element[0]第一个表单中第一个控件
  (3)通过名称name引用对象
 
3.对话框
 （1）警告框：window.alert()
 （2）确认窗口：window.confirm（‘’）
 （3）提示输入框window.prompt(‘输入1,2,3’)
七．	
