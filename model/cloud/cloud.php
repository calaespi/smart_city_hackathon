<?php


require (__DIR__.'/json/JSONGetBasesExistentes.php');
require (__DIR__.'/json/JSONGetLimiteBases.php');
require (__DIR__.'/json/JSONGetAverageBases.php');

// Clase que realizara peticiones a la nube
class Cloud {

    // Constantes
    private const URL_INDEX_BASES = "https://7d966d2d203744479c494e78362ce5e8.eu-west-1.aws.found.io:9243/bases_hackathon/_search/";

    // Atributos
    private static $instance;

    // Hace una peticion a la nube
    private function make_request($json, $url, $method) {
	$curl = curl_init();

	curl_setopt_array($curl, array(
	  CURLOPT_PORT => "9243",
	  CURLOPT_URL => $url,
	  CURLOPT_RETURNTRANSFER => true,
	  CURLOPT_ENCODING => "",
	  CURLOPT_MAXREDIRS => 10,
	  CURLOPT_TIMEOUT => 30,
	  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	  CURLOPT_CUSTOMREQUEST => $method,
	  CURLOPT_POSTFIELDS => json_encode($json),
	  CURLOPT_HTTPHEADER => array(
		"Authorization: Basic ZWxhc3RpYzo2bURUUnN2MGlpSzc0Q1FLWHRpNVFEQzY=",
		"Content-Type: application/json",
	  ),
	));

	$response = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

        return $response;
    }

    // Obtiene una instancia unica (Singleton);
    public static function getInstance() {
        if (!self::$instance instanceof self) {
            self::$instance = new self();
        }

        return self::$instance;
    }


    // Hace una peticion para obtener las bases existentes
    public function getBasesExistentes() {
        $json = new JSONGetBasesExistentes();

        $json_data = $this->make_request($json->makeJson(), $this::URL_INDEX_BASES, "GET");
        
        return $json_data;
    }
    
    // Hace una peticion para obtener el limite de las bases
    public function getLimiteBases() {
        $json = new JSONGetLimiteBases();
        
        $json_data = $this->make_request($json->makeJson(), $this::URL_INDEX_BASES, "GET");
        
        return $json_data;
    }
    
    public function getAverageBases() {
        $json = new JSONGetAverageBases();
        
        $json_data = $this->make_request($json->makeJson(), $this::URL_INDEX_BASES, "GET");
        
        return $json_data;
    }
}
