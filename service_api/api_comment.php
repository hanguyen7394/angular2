 <?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
    
    include_once("database.php");

    $json = file_get_contents('php://input');
    $input = json_decode($json);

    $db = new database();
    if($input->product_id_comment) {
        $lenh_sql = "SELECT *
                    FROM comment c
                    WHERE c.product_id = $input->product_id_comment";
        $db->setQuery($lenh_sql);
        $data = $db->loadAllRow();
    }
    else
    {
        $lenh_sql = "SELECT * FROM comment";
        $db->setQuery($lenh_sql);
        $data = $db->loadAllRow();
    }

    $db->disconect();
    

     $chuoi =  json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

    //xuất chuỗi ra màn hình
    echo $chuoi;
?>