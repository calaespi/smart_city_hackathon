<?php

// Clase que genera el JSON para la descarga de las bases al limite
class JSONGetLimiteBases {

    // Funcion que crea el JSON
    public function makeJson() {
        $res_json = array();

        $res_json['query'] = $this->crearQuery();
        $res_json['sort'] = $this->crearSort();

        return $res_json;

    }
    
    private function crearSort() {
        $res_sort = array();
        
        $res_sort['timestamp'] = 'desc';
        
        return $res_sort;
    }

    // Crea el nodo query
    private function crearQuery() {
        $res_query = array();

        $res_query["bool"] = array();
        $res_query["bool"]["should"] = array();
        $res_query["bool"]["should"][0]["range"] = array();
        $res_query["bool"]["should"][0]["range"]["porcentaje_ocupacion"] = array("lte"=>"0.1");
        $res_query["bool"]["should"][1]["range"] = array();
        $res_query["bool"]["should"][1]["range"]["porcentaje_ocupacion"] = array("gte"=>"0.9");
        return $res_query;
    }

}


