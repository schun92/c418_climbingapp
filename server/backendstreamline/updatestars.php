<?php
$handler = curl_init();

curl_setopt($handler, CURLOPT_URL, "https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=33.6846&lon=-117.8265&maxResults=500&maxDistance=50&key=200289763-98ec05129d51c9ebcc2366ea2558c334");
curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($handler, CURLOPT_RETURNTRANSFER, 1);

$jsonresult = curl_exec($handler);
$result = json_decode($jsonresult);

$routes = $result->routes;

for ($routeCount=0; $routeCount < count($routes); ++$routeCount) {
    $routeID = $routes[$routeCount]->id;
    $routeStar = $routes[$routeCount]->stars;
    $routeStarvotes = $routes[$routeCount]->starVotes;
    $updatestarsquery = "UPDATE `routes` SET `stars` = '$routeStar', `star_votes` = '$routeStarvotes' WHERE `ID` = '$routeID'";
    $descripresult = mysqli_query($conn, $updatestarsquery);
}; 

curl_close($handler);

?>