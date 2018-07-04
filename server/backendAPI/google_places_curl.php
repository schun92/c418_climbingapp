<?php

$place = $_GET['data'];

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=$place&inputtype=textquery&fields=photos,formatted_address,name,rating,geometry&key=AIzaSyB5ttVsVVQIAV9P0pjryi7rTT9ZXn64jEs",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_SSL_VERIFYPEER => false

));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    //echo $response;

    $response = json_decode($response);
    $lat = $response->candidates[0]->geometry->location->lat;
    $lon = $response->candidates[0]->geometry->location->lng;
    // print($lat);
    // print($lon);
}

?>