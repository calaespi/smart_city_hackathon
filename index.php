<?php

// Se importa las librerias
require (__DIR__.'/model/cloud/cloud.php');

$cloud = new Cloud();

print_r($cloud->getBasesExistentes());
