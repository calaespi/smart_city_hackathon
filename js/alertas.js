const FATAL = 'alert-danger';
const WARNING = 'alert-warning';

function crear_alerta(peligro, id, punto) {
    punto = decodeURIComponent(escape(punto));
    punto = punto.toUpperCase();
    let prevision = document.createElement('div');
    prevision.classList.add('alert');
    prevision.classList.add(peligro);

    prevision.innerHTML = `${id} - ${punto}`;

    document.getElementById('alertas').appendChild(prevision);
}

$.ajax({
     url: 'controladores/mapas.php?action=getLimiteBases',
     type: 'GET',
     dataType: 'json',
     success: function(response) {
        let data;

        data.forEach((entrada)=> {
            if(alerta === fatal){

            }
        });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown)
    }
});
