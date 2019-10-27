<?php

// Clase que genera el JSON para la descarga de bases de hoy ordenado por fecha
class JSONGetDataBasesInterval {

    // Funcion que crea el JSON
    public function makeJson($id) {
        $res_json = "{
  \"aggs\": {
    \"3\": {
      \"date_histogram\": {
        \"field\": \"timestamp\",
        \"calendar_interval\": \"1h\",
        \"time_zone\": \"Europe/Madrid\",
        \"min_doc_count\": 1
      }
    }
  },
  \"size\": 0,
  \"_source\": {
    \"excludes\": []
  },
  \"stored_fields\": [
    \"*\"
  ],
  \"script_fields\": {},
  \"docvalue_fields\": [
    {
      \"field\": \"timestamp\",
      \"format\": \"date_time\"
    }
  ],
  \"query\": {
    \"bool\": {
      \"must\": [],
      \"filter\": [
        {
          \"match_all\": {}
        },
        {
          \"match_phrase\": {
            \"id\": {
              \"query\": \"$id\"
            }
          }
        }
      ],
      \"should\": [],
      \"must_not\": []
    }
  }
}";
        return json_decode($res_json);

    }
}

