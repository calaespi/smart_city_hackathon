<?php

require ('../model/cloud/cloud.php');

function getLimiteBases() {
    $cloud = new Cloud();
    echo $cloud->getLimiteBases();

}

if ( isset($_GET['action']) && !empty(isset($_GET['action'])) ) {
  $action = $_GET['action'];
  switch( $action ) {
    case "getLimiteBases":{
       return getLimiteBases(); 
    }

    default: {
      
    }
  }
}

