<?php

// Se importa las librerias
require 'model/cloud/cloud.php';

$cloud = new Cloud();

print_r($cloud->getBasesExistentes());