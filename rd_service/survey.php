<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: text/html; charset=utf-8');

function reFreshToken() {
    $data = array("client_id" => "5827a978-9670-40d6-b956-3f32bb9b0716", 
        "client_secret" => "8f489405768f4b398bc26bfd76d54b31", 
        "refresh_token" => "RvuWM0jvON5kieXuVl-RoQNcKkSO1sk3hoQlpOb_MEk");                                                                    
    $data_string = json_encode($data);                                                                                   
                                                                                                                    
    $ch = curl_init('https://api.rd.services/auth/token');                                                                      
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Title');                                                                 
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                          
        'Content-Type: application/json',                                                                                
        'Content-Length: ' . strlen($data_string))                                                                       
    );                                                                                                                   
                                                                                                                    
    $result = curl_exec($ch);
    curl_close($ch);
    $json = json_decode($result);
    return $json->access_token;
    //echo $json->access_token;
}
reFreshToken();

function sendData() {
	// Variables que voy a enviar
    $email = $_GET["email"];
    $id = $_GET["id"];
    $msg = $_GET["msg"];

    $authorization = "Authorization: Bearer ".reFreshToken()."";
    $data = array(
        "event_type" => "CONVERSION",
        "event_family" => "CDP",
        "payload" => array(
            "conversion_identifier" => $id,
            "email" => $email,
            "cf_anotaciones" => $msg ? $msg : 'No message'
        )
    );                                                                    
    $data_string = json_encode($data);                                                                                   
                                                                                                                    
    $ch = curl_init('https://api.rd.services/platform/events');                                                                      
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);                                                            
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        $authorization,
        'Accept: application/json',
        'Accept-Language: en-US,en;q=0.5',
        'Content-Type: application/json',                                                                             
        'Content-Length: ' . strlen($data_string))                                                              
    );                                                                                                                   
                                                                                                                    
    $result = curl_exec($ch);
    curl_close($ch);
    echo  $result;
}

sendData();
?>