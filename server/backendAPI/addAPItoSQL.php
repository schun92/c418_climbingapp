<?php
print_r($_POST);
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");
    
$output = [
	'success'=> false,
	'errors'=>[]
];

if(empty($_POST['name'])){
	$_POST['name'] = null;
};
if(empty($_POST['type'])) {
	$_POST['type'] = null;
};
if(empty($_POST['difficulty'])) {
	$_POST['difficulty'] = null;
};
if(empty($_POST['stars'])){
	$_POST['stars'] = null;
};
if(empty($_POST['star_votes'])) {
	$_POST['star_votes'] = 0;
};
if(empty($_POST['pitches'])) {
	$_POST['pitches'] = 0;
};
if(empty($_POST['location_state'])){
	$_POST['location_state'] = null;
};
if(empty($_POST['location_region'])) {
	$_POST['location_region'] = null;
};
if(empty($_POST['location_park'])) {
	$_POST['location_park'] = null;
};
if(empty($_POST['location_region'])){
	$_POST['location_region'] = null;
};
if(empty($_POST['image'])) {
	$_POST['image'] = null;
};
if(empty($_POST['longitude'])) {
	$_POST['longitude'] = null;
};
if(empty($_POST['latitude'])) {
	$_POST['latitude'] = null;
};
if(empty($_POST['url'])) {
	$_POST['url'] = null;
};
print_r($_POST);

$route_id = $_POST['routeID'];
$name = $_POST['name'];
$type = $_POST['type'];
$difficulty = $_POST['difficulty'];
$stars = $_POST['stars'];
$star_votes = $_POST['star_votes'];
$pitches = $_POST['pitches'];
$location_state = $_POST['location_state'];
$location_region = $_POST['location_region'];
$location_park = $_POST['location_park'];
$location_mountain = $_POST['location_mountain'];
$image = $_POST['image'];
$longitude = $_POST['longitude'];
$latitude = $_POST['latitude'];
$routeURL = $_POST['url'];

$query = "INSERT INTO `mountainproject`.`routes` (`id`, `locationID`, `name`, `type`, `difficulty`, `stars`, `star_votes`, `pitches`, `location_state`, `location_region`, `location_park`, `location_mountain`, `image`, `longitude`, `latitude`, `routeURL`) VALUES ('$route_id', '0', '$name', '$type', '$difficulty', '$stars', '$star_votes', '$pitches', '$location_state', '$location_region', '$location_park', '$location_mountain', '$image', '$longitude', '$latitude', '$routeURL')";

$result = mysqli_query($conn, $query);
print($result);
if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if (mysqli_affected_rows($conn) > 0 ) {
		$output['success'] = true;
	} else {
		$output['errors'][] = 'no data';
	};
};

$outputJSON = json_encode($output);
print($outputJSON);
?>

