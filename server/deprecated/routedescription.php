<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");
ini_set('max_execution_time', 300);
$output = [
	'success'=> false,
	'errors'=>[]
];

$query = "SELECT `id`, `routeURL`, `name` FROM `routes`";
$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if ($result) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $id = $row['id'];
            $descriptionURL = $row['routeURL'];

            $handler = curl_init();
            curl_setopt($handler, CURLOPT_URL, "$descriptionURL");
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

            $cleandescrip = strip_tags($description);
            $descripwithslash = addslashes($cleandescrip);

            if(empty($descripwithslash)) {
                $descripwithslash = "No description available.";
            }

            $descripquery = "UPDATE `routes` SET `description` = '$descripwithslash' WHERE `ID` = '$id'";
            $descripresult = mysqli_query($conn, $descripquery);

            };
	    } else {
		    $output['errors'][] = 'no data';
	    };
    };
print_r($output['data']);

?>