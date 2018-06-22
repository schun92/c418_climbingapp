<?php
    $url = 'dummydata/data.json';
    $data = file_get_contents($url);
    $routes = json_decode($data);
    $output = [
        'success' => true,
        'results' => $routes
    ];
    $output_json = json_encode($output);
    print($output_json);
?>