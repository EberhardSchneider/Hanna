<?php
$dir = "../images/*/";

$images = glob("" . $diectory . "*.jpg");

$imgs = '';

foreach($images as $image) { $imgs[]="$image"; }

print json_encode( $imgs );
?>