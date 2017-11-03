<?php
	

	$dir = "../hanna/dist/images/gallery/";

	$images = glob("../images/". $_POST["directory"]. "/*.*");

	// $imgs = array();
	// $index = 0;
	// foreach($images as $image) { 
	// 	$imgs[$index]=$url = str_replace("\/", "\\", $image); 
	// 	$index++; }

	print json_encode( $images );
?>