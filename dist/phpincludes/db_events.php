<?php
	
include 'connect.php';



mysqli_query($db, 'SET NAMES utf-8');


$result = $db->query("SELECT * FROM events ORDER BY datum");


$index = 0;
$events = array();

while ( $dsatz = $result->fetch_assoc() ) {
	
	$events[$index] = $dsatz;
	$index++;
}

function encode_items(&$item, $key) // Umlaute behandeln
{
    $item = utf8_encode($item);
}
array_walk_recursive($events, 'encode_items');

echo $events;

mysqli_close( $db );?>