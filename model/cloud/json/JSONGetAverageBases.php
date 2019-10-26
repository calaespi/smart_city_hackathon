<?php

// Clase que genera el JSON para la descarga de la media de las ocupaciones
class JSONGetAverageBases {

    // Numero de bases existentes
    private const NUM_BASES = 59;

    // Funcion que crea el JSON
    public function makeJson() {
        $res_json = array();

        $res_json['size'] = 0;
        $res_json['aggs'] = $this->crearAggs();

        return $res_json;

    }

    // Crea el nodo Aggs
    private function crearAggs() {
        $res_aggs = array();

        $res_aggs['by_id'] = array();
        $res_aggs['by_id']['terms'] = array();
        
        $res_aggs['by_id']['terms']['field'] = 'id';
        $res_aggs['by_id']['terms']['size'] = $this::NUM_BASES;
        
        $res_aggs['aggs'] = array();
        $res_aggs['aggs']['avg_porcentaje_ocupacion'] = array();
        $res_aggs['aggs']['avg_porcentaje_ocupacion']['avg'] = array();
        $res_aggs['aggs']['avg_porcentaje_ocupacion']['avg']['field'] = 'porcentaje_ocupacion';
        
        return $res_aggs;
    }

}


