
<?php
require('../model/cloud/cloud.php');

function getBasesExistentes()
{
    $cloud = new Cloud();
    echo $cloud->getBasesExistentes();
}

if (isset($_GET['action']) && !empty(isset($_GET['action']))) {
    $action = $_GET['action'];
    switch ($action) {
        case "getBasesExistentes": {
                return getBasesExistentes();
            }

        default: { }
    }
}
