
function mostrar_ocupacion(data) {
    var ocupacion_actual = document.getElementById("InfoBasesOcupacionActual");
    var ocupacion_maxima = document.getElementById("InfoBasesOcupacionMaxima");
    //var ocupacion_media = document.getElementById("InfoBasesOcupacionMedia");
    var prevision_ocupacion = document.getElementById("InfoBasesPrevisionOcupacion");

    var e = document.getElementById("selectBase");
    var selected = e.value;

    let bases = data.hits.hits;
    var temp = bases.find(function(e){
        return  e._source.punto == selected ;
    })._source;

    var porcentaje_ocupacion = temp.porcentaje_ocupacion * 100;

    ocupacion_actual.innerHTML = temp.ocupados;
    ocupacion_maxima.innerHTML = temp.puestos;
    //ocupacion_media.innerHTML = Math.round(porcentaje_ocupacion * 100) / 100;
    
    if (temp.porcentaje_ocupacion <= 0.1) {
        prevision_ocupacion.innerHTML = "OCUPACIÓN BAJA";
    } else if (temp.porcentaje_ocupacion >= 0.9) {
        prevision_ocupacion.innerHTML = "OCUPACIÓN ALTA";
    } else {
        prevision_ocupacion.innerHTML = "OCUPACION NORMAL";
    }
    
}

// SET UP INFO
// $.ajax({
//     url: 'controladores/infobases.php?action=getBasesExistentes',
//     type: 'get',
//     dataType: 'json',
//     success: function (response) {
//         console.log(response);
//         mostrar_ocupacion(response);
//     },
//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//         console.log(errorThrown)
//     }
// });
