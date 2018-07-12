<?php

$query = "SELECT `id`, `difficulty` FROM `routes` WHERE LOWER(`difficulty`) REGEXP 'V'";
$result = mysqli_query($conn,$query);

if ( mysqli_num_rows($result) > 0 ) {
    while ( $row = mysqli_fetch_assoc($result) ) {
        $ids_and_diffs[] = $row;
    };
};

//Takes the $ids_and_diffs array and turns it into a string
$diffStr = [];
array_walk_recursive($ids_and_diffs, function($v) use (&$diffStr) {
    $diffStr[] = $v;
});
$diffStr = implode(' ', $diffStr);

//Takes the difficulties string and runs it through regex to grab difficuly strings like 'V14+'
$re = '/\bV(([0-9]{1,2})|(-easy?))((\+|(-))|(\b))([0-9])?/m';
preg_match_all($re, $diffStr, $matches, PREG_SET_ORDER, 0);

//Takes difficulty strings saved in matche and cleans so that they are V and a number
foreach($matches as $clean_difficulty){
    
    $string = $clean_difficulty[0];
    $pattern = '/-easy?/m';
    $replacement = '0';
    $clean_difficulty[0] = preg_replace($pattern, $replacement, $string);

    $string = $clean_difficulty[0];
    $pattern = '/-[0-9]/m';
    $replacement = '.5';
    $clean_difficulty[0] = preg_replace($pattern, $replacement, $string);

    $parsed_difficulties_arr[] = $clean_difficulty[0]; 
};

//Inserts the cleaned difficuly strings into the table 
if ( count($ids_and_diffs) === count($parsed_difficulties_arr) ){
    for ( $i=0; $i<count($ids_and_diffs); $i++){
        $id = $ids_and_diffs[$i]['id'];
        $diff = $parsed_difficulties_arr[$i];
        $query = "UPDATE `routes` SET `boulder_difficulty`='{$diff}' WHERE `id`=$id";
        $result = mysqli_query($conn,$query);
    };
};