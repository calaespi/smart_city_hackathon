<?php
require ('../model/cloud/cloud.php');

function getBasesExistentes() {
    $cloud = new Cloud();
    echo $cloud->getBasesExistentes();
}

function getDataBasesInterval($id) {
    $cloud = new Cloud();
    echo $cloud->getDataBasesInterval($id);
}

if ( isset($_GET['action']) && !empty(isset($_GET['action'])) ) {
  $action = $_GET['action'];
  switch( $action ) {
    case "getBasesExistentes":{
       return getBasesExistentes(); 
    } break;
    
    case "getDataBasesInterval":{
        return getDataBasesInterval($_GET['id']);
    } break;

    default: {
      
    }
  }
}

?>
