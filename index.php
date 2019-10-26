<?php

define('HOMEDIR',__DIR__);

// Se importa las librerias
require (HOMEDIR.'/model/cloud/cloud.php');

$cloud = new Cloud();

print_r($cloud->getBasesExistentes());