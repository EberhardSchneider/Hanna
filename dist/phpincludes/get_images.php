<?php
	

	$dir = "../hanna/dist/images/";

	$images = glob("../images/*.*");

	// $imgs = array();
	// $index = 0;
	// foreach($images as $image) { 
	// 	$imgs[$index]=$url = str_replace("\/", "\\", $image); 
	// 	$index++; }

	print json_encode( $images );
?>