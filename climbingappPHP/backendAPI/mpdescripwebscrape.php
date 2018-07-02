<?php

$handler = curl_init();
$id = 105924807;
curl_setopt($handler, CURLOPT_URL, "https://www.mountainproject.com/route/105924807/the-nose");
curl_setopt($handler, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($handler, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
curl_setopt($handler, CURLOPT_FOLLOWLOCATION, true);

$page = curl_exec($handler);
$start = strpos($page, 'Description');
$testArea = substr($page, $start, 2000);
$start = strpos($testArea, 'fr-view');
$end = strpos($testArea, '</div>', $start);
$description = substr($testArea, $start+9, $end-$start-9);
$startKey = "a_$id";
$data = [];

print_r($description);

?>
