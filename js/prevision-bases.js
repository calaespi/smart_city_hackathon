const PONER = 'poner';
const QUITAR = 'quitar';
function crear_prevision(tipo, id, punto) {
    punto = decodeURIComponent(escape(punto));
    punto = punto.toUpperCase();
    let prevision = document.createElement('div');
    prevision.classList.add('bonificacion');
    prevision.classList.add(tipo);

    prevision.innerHTML = `${id} - ${punto}`;

    document.getElementById('previsiones').appendChild(prevision);

}

function crear_base(tipo, id, punto) {
    punto = decodeURIComponent(escape(punto));
    punto = punto.toUpperCase();
    let prevision = document.createElement('div');
    prevision.classList.add('bonificacion');
    prevision.classList.add(tipo);

    prevision.innerHTML = `${id} - ${punto}`;

    document.getElementById('base').appendChild(prevision);

}
    let prevision;
    $.ajax(
        { url: 'controladores/bonificaciones.php?action=getAverageBases',
             type: 'GET',
             dataType: 'json',
             success: function(response) {
                 prevision = response.aggregations.by_id.buckets;
                 for (var i=0; i<prevision.length; i++) {
                    if(prevision[i].avg_porcentaje_ocupacion.value <= 0.1) {
                        crear_prevision(PONER, prevision[i].key, bases_actuales.find(function (e) {return e._source.id==prevision[i].key})._source.punto);
                    } else if (prevision[i].avg_porcentaje_ocupacion.value >= 0.9) {
                        crear_prevision(QUITAR, prevision[i].key, bases_actuales.find(function (e) {return e._source.id==prevision[i].key})._source.punto);
                    }
                 }
                 prevision.forEach((base)=>{
                    
                });
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown)
            }
    });
    
    setTimeout(function(){
        bases_actuales.forEach((base) => {
        base = base._source;

        if(base.porcentaje_ocupacion <= 0.1) {
            crear_base(PONER, base.id, base.punto);
        } else if(base.porcentaje_ocupacion >= 0.9) {
            crear_base(QUITAR, base.id, base.punto);
        }
    });
    }, 3000);
    
    



