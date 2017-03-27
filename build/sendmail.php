<?

isset($_REQUEST['data']) or die('motherfucker');

$data = json_decode($_REQUEST['data']);




$message = '<html><head></head><body>';

$message .= '<h1>'.$data->header.'</h1>';

// if(isset($data->choice)){
// 	$message .= '<h2>Пакет : '.$data->choice.'</h2>';
// }



$message .= '<p>Имя : <strong>'.$data->name.'</strong></p>';

$message .= '<p>Телефон : <strong>'.$data->phone.'</strong></p>';

// $message .= '<p>E-Mail : <strong>'.$data->mail.'</strong></p>';

// $message .= '<p>Package : <strong>'.$_REQUEST['package'].'</strong></p></body></html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html;' . "\r\n";

$headers .= 'From: InvestmentAcademy <callback@md.com>' . "\r\n";

$to = '';

foreach ($data->receivers as $receiver) {
	$to .= $receiver .", ";
}

echo mail($to, 'InvestmentAcademy', $message, $headers);
// mail($to, $message, $headers) or die("Error!");

// header('Location: /thanks.php');
 