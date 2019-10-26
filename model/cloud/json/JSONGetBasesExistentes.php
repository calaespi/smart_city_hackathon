<?php

// Clase que genera el JSON para la descarga de bases existentes
class JSONGetBasesExistentes {
    
    // Numero de bases existentes
    private const NUM_BASES = 59;
    
    // Funcion que crea el JSON
    public function makeJson() {
        $res_json = array();
        
        $res_json['from'] = 0;
        $res_json['size'] = $this::NUM_BASES;
        $res_json['query'] = $this->crearQuery();
        $res_json['aggs'] = $this->crearAggs();
        
        return $res_json;
        
    }
    
    // Crea el nodo query
    private function crearQuery() {
        $res_query = array();
        
        $res_query["match_all"] = json_decode ("{}");
        
        return $res_query;
    }
    
    // Crea el nodo Aggs
    private function crearAggs() {
        $res_aggs = array();
        
        $res_aggs['unique_ids'] = array();
        $res_aggs['unique_ids']['terms'] = array();
        $res_aggs['unique_ids']['terms']['field'] = 'id';
        
        return $res_aggs;
    }
    
}