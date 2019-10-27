const FATAL = 'alert-danger';
const WARNING = 'alert-warning';

function crear_alerta(peligro, id, punto, timestamp) {
    punto = decodeURIComponent(escape(punto));
    punto = punto.toUpperCase();
    let prevision = document.createElement('div');
    prevision.classList.add('alert');
    prevision.classList.add(peligro);
    
    timestamp = new Date(timestamp);
    var hora, minutos;
    if (timestamp.getHours() < 10) {
        hora = '0' + timestamp.getHours();
    } else {
        hora = timestamp.getHours();
    }
    
    if (timestamp.getMinutes() < 10) {
        minutos = '0' + timestamp.getMinutes();
    } else {
        minutos = timestamp.getMinutes();
    }
    
    var fecha = '<strong>' + timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + 
                timestamp.getFullYear() + ' ' + hora + ':' + minutos + '</strong>';

    prevision.innerHTML = `${id} - ${punto} ${fecha}`;

    document.getElementById('alertas').appendChild(prevision);
}

$.ajax({
     url: 'controladores/bonificaciones.php?action=getLimiteBases',
     type: 'GET',
     dataType: 'json',
     success: function(response) {
        let data = response.hits.hits;
        data.forEach((entrada)=> {
            if((entrada._source.puestos === entrada._source.ocupados)||
                (entrada._source.ocupados === 0)){
                crear_alerta(FATAL, entrada._source.id, entrada._source.punto, entrada._source.timestamp);
            } else {
                crear_alerta(WARNING, entrada._source.id, entrada._source.punto, entrada._source.timestamp);
            }
        });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(errorThrown)
    }
});