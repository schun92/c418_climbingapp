<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

//Fetch rows from table 
$query = "SELECT `id`, `type` FROM `routes`";
$result = mysqli_query($conn,$query);
if ( mysqli_num_rows($result) > 0 ) {
    while ( $row = mysqli_fetch_assoc($result) ) {
        $ids_and_type[] = $row;
    }
}

//Converts longer strings into abbreviations
for ( $i=0; $i<count($ids_and_type); $i++){

    //Converts 'Boulder' to 'B'
    $string = $ids_and_type[$i]['type'];
    $pattern = '/bo[a-z]{0,5}/mi';
    $replacement = 'B';
    $ids_and_type[$i]['type'] = preg_replace($pattern, $replacement, $string);

    //Converts 'Sport' to 'S'
    $string = $ids_and_type[$i]['type'];
    $pattern = '/sp[a-z]{0,3}/mi';
    $replacement = 'S';
    $ids_and_type[$i]['type'] = preg_replace($pattern, $replacement, $string);

    //Removes unnecessary ',' add the end of type line
    $string = $ids_and_type[$i]['type'];
    $pattern = '/, ?$/mi';
    $replacement = '';
    $ids_and_type[$i]['type'] = preg_replace($pattern, $replacement, $string);
}

//Inserts the cleaned strings into the table 
for ( $i=0; $i<count($ids_and_type); $i++ ){
    $id = $ids_and_type[$i]['id'];
    $type = $ids_and_type[$i]['type'];
    $query = "UPDATE `routes` SET `type_abbrev`='{$type}' WHERE `id`=$id";
    $result = mysqli_query($conn,$query);
}

echo '<pre>';
print_r($ids_and_type);
echo '</pre>';