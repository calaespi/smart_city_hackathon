const PONER = 'poner';
const QUITAR = 'quitar';
function crear_prevision(tipo, id) {
    let prevision = document.createElement('div');
    prevision.classList.add('bonificacion');
    prevision.classList.add(tipo);

    prevision.innerHTML = `${id}`;

    document.getElementById('previsiones').appendChild(prevision);

}

//function cargar_prevision() {
    let prevision;
    $.ajax(
        { url: 'controladores/bonificaciones.php?action=getAverageBases',
             type: 'GET',
             dataType: 'json',
             success: function(response) {
                 prevision = response.aggregations.by_id.buckets;
                 prevision.forEach((base)=>{
                    if(base.avg_porcentaje_ocupacion.value <= 0.1) {
                        crear_prevision(PONER, base.key);
                    } else if (base.avg_porcentaje_ocupacion.value >= 0.9) {
                        crear_prevision(QUITAR, base.key);
                    }
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
            }
    });





    bases_actuales.forEach((element) => {
        let base = base._source;

        if(base.porcentaje_ocupacion <= 0.1) {
            crear_prevision(PONER, base.id);
        } else if(base.porcentaje_ocupacion >= 0.9) {
            crear_prevision(QUITAR, base.puesto);
        }
        log(base);
    });







//}
