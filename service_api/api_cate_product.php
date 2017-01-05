<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");

    include_once("database.php");

    $db = new database();
    
    $lenh_sql = "SELECT * FROM cate_product";
    $db->setQuery($lenh_sql);
    $data = $db->loadAllRow();
    $db->disconect();
    

    //print_r($data);

    //chuyen du lieu thanh json
    $chuoi =  json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

    //xuất chuỗi ra màn hình
    echo $chuoi;
?>