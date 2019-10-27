<?php

// Clase que genera el JSON para la descarga de bases de hoy ordenado por fecha
class JSONGetDataBasesInterval {

    // Funcion que crea el JSON
    public function makeJson($id) {
        // Erroneo
        /*
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
}"; */
        // Top Hit
        /*
        $res_json = "{
  \"aggs\": {
    \"3\": {
      \"date_histogram\": {
        \"field\": \"timestamp\",
        \"calendar_interval\": \"1h\",
        \"time_zone\": \"Europe/Madrid\",
        \"min_doc_count\": 1
      },
      \"aggs\": {
        \"2\": {
          \"cardinality\": {
            \"field\": \"ocupados\"
          }
        }
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
        },
        {
          \"range\": {
            \"timestamp\": {
              \"format\": \"strict_date_optional_time\",
              \"gte\": \"now-1d\",
              \"lte\": \"now\"
            }
          }
        }
      ],
      \"should\": [],
      \"must_not\": []
    }
  }
}";*/
        $res_json = "{
  \"size\": 480, 
  \"query\": {
    \"bool\": {
      \"must\": [
        {\"term\": {
          \"id\": \"$id\"
        }

        },
        {
          \"range\": {
            \"timestamp\": {
              \"gte\": \"now-1d\",
              \"lte\": \"now\"
            }
          }
        }
      ]
    }

  },
  \"sort\": {
        \"timestamp\": \"desc\"
    }
}";
        return json_decode($res_json);

    }
}

