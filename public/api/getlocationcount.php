<?php
require 'mysql_connect.php';

$output = [
	'success'=> false,
	'errors'=>[]
];

$query = "SELECT * FROM locations";
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
print($outputJSON);
?>