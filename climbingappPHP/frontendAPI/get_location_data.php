<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

$output = [
	'success'=> false,
	'errors'=>[]
];

$query = "SELECT `ID`, `name`, `avgLat`, `avgLong`, `numRoutes` FROM locations WHERE (avgLat BETWEEN 33.6163 AND 33.8512) AND (avgLong BETWEEN -117.9008 AND -117.5991)";

$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'Database Error';
} else {
	if (mysqli_num_rows($result) > 0) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        };
	} else {
		$output['errors'][] = 'No Data';
	};
};

$outputJSON = json_encode($output);
print_r($outputJSON);

?>