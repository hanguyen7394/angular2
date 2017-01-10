 <?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
	
	include_once("database.php");

	$json = file_get_contents('php://input');
	$input = json_decode($json);

	$db = new database();

	if($input->product_cate_id)
	{
		$lenh_sql = "SELECT *
		FROM product p 
		WHERE p.product_cate_id = $input->product_cate_id";
		
		$db->setQuery($lenh_sql);
		$data = $db->loadAllRow();
	}
	else if($input->id)
	{
		$lenh_sql = "SELECT * 
		FROM product p
		WHERE p.id = $input->id";
			
		$db->setQuery($lenh_sql);
		$data = $db->loadAllRow();
	}
	else if($input->product_id)
	{
		$lenh_sql = "SELECT *
					FROM product p 
					WHERE
					p.id != $input->product_id AND p.product_cate_id = (SELECT product_cate_id 
																		FROM product p
																		WHERE p.id = $input->product_id)";
			
		$db->setQuery($lenh_sql);
		$data = $db->loadAllRow();
	}
	else
	{
		$lenh_sql = "SELECT * FROM product";
		$db->setQuery($lenh_sql);
		$data = $db->loadAllRow();
	}

	$db->disconect();
	

	//print_r($data);

	//chuyen du lieu thanh json
	$chuoi =  json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

	//xuất chuỗi ra màn hình
	echo $chuoi;
?>
