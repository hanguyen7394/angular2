<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");

	include_once("database.php");

	$db = new database();
	$json = file_get_contents('php://input');
	$input = json_decode($json);

	if($input->user_data) {
		$user = $input->user_data;
		$lenh_sql = "
			INSERT INTO user (id,username,password,password_salt,email,first_name,last_name,img,level,last_login,created,updated,status)
			VALUES ($user.id, $user.username,$user.password,$user.password_salt,$user.email,$user.first_name,$user.last_name,$user.img,$user.level,$user.last_login,$user.created,$user.updated,$user.status
			)";
		$db->setQuery($lenh_sql);
		$db->executeSQL();
	}
	else {
		$lenh_sql = "SELECT * FROM user";
		$db->setQuery($lenh_sql);
		$data = $db->loadAllRow();
	}

	$db->disconect();
	
	//print_r($data);

	//chuyen du lieu thanh json
	$chuoi =  json_encode($data, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

	//xuất chuỗi ra màn hình
	echo $chuoi;
	echo $user_data;
?>
