const PONER = 'poner';
const QUITAR = 'quitar';
function crear_prevision(tipo, rango) {
    let prevision = document.createElement('div');
    prevision.classList.add('bonificacion');
    prevision.classList.add(tipo);

    prevision.innerHTML = 'RANGO DE TIEMPO';

}


function cargar_prevision() {
    let prevision;
    $.ajax(
        { url: 'controladores/bonificaciones.php?action=getLimiteBases',
             type: 'POST',
             dataType: 'json',
             success: function(response) {
                prevision = response.aggregations.buckets;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
            }
    });

    prevision.forEach((base)=>{
        if(avg_porcentaje_ocupacion <= 0.1) {
            crear_prevision(PONER);
        } else if (avg_porcentaje_ocupacion >= 0.9) {
            crear_prevision(QUITAR);
        }
    })



    bases_actuales.forEach((element) => {
        let base = base._source;

        log(base);
    });







}
