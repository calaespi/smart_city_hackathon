
function mostrar_ocupacion(data) {
    var ocupacion_actual = document.getElementById("InfoBasesOcupacionActual");
    var ocupacion_maxima = document.getElementById("InfoBasesOcupacionMaxima");
    var ocupacion_media = document.getElementById("InfoBasesOcupacionMedia");
    var prevision_ocupacion = document.getElementById("InfoBasesPrevisionOcupacion");

    var e = document.getElementById("selectBase");
    var selected = e.value;

    let bases = data.hits.hits;
    var temp = bases.find(function(e){

        console.log(selected);
        console.log(e._source.punto);
        if(e._source.punto == selected){
            console.log("TRUE");
        }
        return  e._source.punto == selected ;
    })._source;

    ocupacion_actual.innerHTML = temp.ocupados;
    ocupacion_maxima.innerHTML = temp.puestos;
    ocupacion_media.innerHTML = temp.porcentaje_ocupacion * 100;
    prevision_ocupacion.innerHTML = "WIP";
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
