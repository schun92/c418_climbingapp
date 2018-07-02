<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

$output = [
	'success'=> false,
	'errors'=>[]
];

$locID = $_POST['routeID'];
$query = "SELECT * FROM `routes` WHERE `locationID` = $locID";
$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if ($result) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        };
	} else {
		$output['errors'][] = 'no data';
	};
};

$outputJSON = json_encode($output);
print_r($outputJSON);
?>