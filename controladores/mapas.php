<?php
require ('../model/cloud/cloud.php');

function getBasesExistentes() {
    $cloud = new Cloud();
    echo $cloud->getBasesExistentes();

}

if ( isset($_GET['action']) && !empty(isset($_GET['action'])) ) {
  $action = $_GET['action'];
  switch( $action ) {
    case "getBasesExistentes":{
       return getBasesExistentes(); // or call here one();
    }

    default: {
      // do not forget to return default data, if you need it...
    }
  }
}

?>
