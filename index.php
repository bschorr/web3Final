<?php
require_once('read_prayer.php');


?>

<!DOCTYPE html>
<html>

<head>

	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="addStyle.css">
	<link rel="stylesheet" type="text/css" href="margins.css">

</head>

<body>

	<!-- This is the opening page. -->

	<div id = "opening">
		<h3>Lovelace 1:1 - In the beginning there was the Word, and the Word was with the Developer, and the Word was the Developer. </h3>
		<h4>(open your Javascript Console: &#8984; + &#x2325; + J)</h4>
	</div>

	<!-- This is when page is created. There's nothing here -->

	<!-- Maybe add some canvas here for the spirit of the Developer? -->

	<!-- This is when content is created. -->
	<div id="content">
			The Web Developer's Prayer
			<?php read_prayer('','<br/>')?>
	</div>

	<!-- This is when elements are created -->
	<div id="elements">
		&lt;html&gt;<br/>
		&lt;head&gt;<br/>
		&lt;/head&gt;<br/>
		&lt;body&gt;<br/>
		The Web Developer's Prayer<br/>
		<?php read_prayer('','<br/>')?>
		&lt;/body&gt;<br/>
		&lt;/html&gt;<br/>
	</div>

	<!-- This is when we divide the body in tags -->
	<div id="divideBody">
		&lt;html&gt;<br/>
		&lt;head&gt;<br/>
		&lt;/head&gt;<br/>
		&lt;body&gt;<br/>
		&lt;h1&gt;The Web Developer's Prayer&lt;/h1&gt;<br/>
		&lt;p&gt;<?php read_prayer('', '&lt;br/&gt;<br/>')?>&lt;/p&gt;<br/>
		&lt;/body&gt;<br/>
		&lt;/html&gt;<br/>
	</div>

	<!-- This is when we add elements to the head and indentation -->
	<div id="addElements">
		
		&lt;html&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp; &lt;head&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;May development be blessed&lt;/title&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;The Web Developer's Prayer&lt;/h1&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</br
		<?php read_prayer('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;','&lt;br/&gt;<br/>')?>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br/>
		&lt;/html&gt;<br/>

	</div>

	<!-- This is when we add create the DOM... all functions from now on just change things in this. -->
	<div id="createDom">
		<h1>The Web Developer's Prayer</h1>
		<img src="http://www.supernaturalwiki.com/images/7/7c/God-02.jpg">
		<p>
			<?php read_prayer('','<br/>')?>			
		</p>
	</div>

	<!-- This is facebook's like button -->
	<div id="button">
		<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.bernardoschorr.com&amp;width&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=187644751438036" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:80px;" allowTransparency="true" id = "dynamicContent"></iframe>
	<div>

	<script type="text/javascript" src="main.js"></script>

</body>

</html>