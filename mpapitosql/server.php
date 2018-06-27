<?php

$conn = mysqli_connect("localhost", "root", "root", "database");
    
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
if(empty($_POST['location_other1'])) {
	$_POST['location_other1'] = null;
};
if(empty($_POST['location_other2'])) {
	$_POST['location_other2'] = null;
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
$location_other1 = $_POST['location_other1'];
$location_other2 = $_POST['location_other2'];
$image = $_POST['image'];
$longitude = $_POST['longitude'];
$latitude = $_POST['latitude'];

$query = "INSERT INTO `routes` (`route_id`,`name`, `type`, `difficulty`, `stars`, `star_votes`, `pitches`, `location_state`, `location_region`, `location_park`, `location_mountain`, `location_other1`, `location_other2`, `image`, `longitude`, `latitude`) VALUES ('$route_id','$name', '$type', '$difficulty', '$stars', '$star_votes', '$pitches', '$location_state', '$location_region', '$location_park', '$location_mountain', '$location_other1', '$location_other2', '$image', '$longitude', '$latitude')";

$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if (mysqli_affected_rows($conn) > 0 ) {
		$output['success'] = true;
		$insertID = mysqli_insert_id($conn);
		$output['insertID'] = $insertID;
	} else {
		$output['errors'][] = 'no data';
	};
};

$outputJSON = json_encode($output);
print($outputJSON);
?>

