
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
                prevision = response;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
            }
    });

    




}
