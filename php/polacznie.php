<?

function polacz()
{
    $baza='creator82';
    $user='creator82';
    $haslo='VErsalift1!';


mysql_connect('creator82.db.10942894.hostedresource.com', $baza, $haslo);
mysql_select_db($user); 
mysql_query("SET NAMES 'utf8'"); 
}

if(isset($_POST["strony"])){
	
	
	polacz();
	$zapytanie = "SELECT * FROM `strony`";
	$result1 = mysql_query($zapytanie);
	$array = array();
$row = mysql_fetch_row($result1);
while($row) {
    $array[] = $row;
    $row = mysql_fetch_row($result1);
}

  echo json_encode($array); 
	
	

	
	
}





?>