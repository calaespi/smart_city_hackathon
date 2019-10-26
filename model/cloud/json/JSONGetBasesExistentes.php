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

    // Procesa la respuesta
    // public function getDataResponse($json) {
    //     $list = array();
    //
    //     $hits = $json["hits"]["hits"];
    //
    //     for ($i=0; $i<count($hits); $i++) {
    //         $data = $hits[$i]['_source'];
    //
    //         $location = explode(",", $data['location']);
    //         $location = array(floatval($location[0]), floatval($location[1]));
    //
    //         $base = new Base();
    //         $base->set_id($data['id']);
    //         $base->set_punto($data['punto']);
    //         $base->set_puestos($data['puestos']);
    //         $base->set_ocupados($data['ocupados']);
    //         $base->set_location($location);
    //         $base->set_timestamp($data['timestamp']);
    //         $base->set_porcentaje_ocupacion($data['porcentaje_ocupacion'] or 0);
    //         array_push($list, $base);
    //     }
    //
    //     return $list;
    // }

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
