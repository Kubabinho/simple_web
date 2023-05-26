<?php
include "config.php";

// Check user login or not
if(!isset($_SESSION['uname'])){
    header('Location: index.php');
}

// logout
if(isset($_POST['but_logout'])){
    session_destroy();
    header('Location: index.php');
}
?>
<!Doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Tytuł</title>
<script type="text/javascript">

function time_() {
  var today = new Date();
		
		var day = today.getDate();
		var month = today.getMonth()+1;
		var year = today.getFullYear();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
		var sec = today.getSeconds();
		if (sec<10) sec = "0"+sec;
		
		document.querySelector("#clock").innerHTML = day+"/"+month+"/" year+"  "+hour+":"+minute+":"+sec;

    setTimeout(time_, 1000);
}
window.addEventListener("load", time_);
</script>
<style type="text/css">
.submenuUl{
list-style-type: none;
margin: 0;
padding: 0;
border: 5px solid gray;
border-bottom-width: 0;
width: auto; 
height: auto;
}

.submenuUl li a
{
background: green repeat-x bottom left;
font: 11pt Verdana, sans-serif;
color: white;
display: block;
height: 13pt;
width: auto;
margin: 0;
padding: 3pt 0 3pt 8pt;
text-decoration: none;
}

.submenuUl li a:visited, .submenuUl li a:active{
	color: white;
}

.submenuUl li a:hover{
	color: orange;
}

body {color: #000; margin: 0; padding: 0; background-color: maroon; text-align:center; background-image: url(background.jpg)}
#container {background-color: #ffffff}
#header {background-color: #e3f0ff}
#left {background-color: lightblue}
#middle {background-color: aqua}
#footer {background-color: white}
#submenu {background-color: blue}



#footer{
text-align : center;
}
#header{
background-image: url("banner.png");
color: white;
}
#left{
 text-align:center;
}
#clock{
 text-align:center;
}



#container {width: 1000px; margin: 10px auto 20px auto; border: solid 1px #c0c0c0; text-align: left; position: relative}

#header {width: 100%; height: 300px}

#left {float: left; width: 160px; height: auto; min-height: 400px; display: inline}

#middle {float: left; width: 840px;  height: auto; min-height: 400px; display: inline}

#footer {  clear: both; width: 100%; height: 60px}

#submenu {top: 340px; left: 10px; width: 140px; height: auto; position: absolute}

#clock {top: 665px; left: 10px; width: 140px; height: auto; position: absolute;}


</style>
</head>
<body>

<div id="container">
  <div id="submenu">
  <!--#submenu-->
	<ul class="submenuUl">
		<li><a href="javascript:void(0)" onclick="parent.table.location.href = 'lectures.php'; return false">Lectures</a></li>
		<li><a href="javascript:void(0)" onclick="parent.table.location.href = 'powiesci.php'; return false">Epics</a></li>
			
	</ul>
  
  </div>
  <div id="clock"></div>
  <div id="header">
      <h1>Bookstore</h1>
  </div>
  <div id="left"> MENU </div>
  <div id="middle">

	<iframe name="table" src="lectures.php" width=840px height=370px frameborder="0"></iframe>
  </div>
  <div id="footer"> <b>  nice books  </b> </div>
</div>

</body>
</html>