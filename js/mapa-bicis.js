let graph = document.getElementById('BaseGraph');
let btn_cerrar = document.getElementById('cerrar_g');

btn_cerrar.addEventListener('click', ()=> {
    graph.classList.remove('mostrar');
    graph.classList.add('amagar');
})

let bases_actuales;
let marcadores_bases = [];

function showBaseGraph(circulo) {
graph.classList.remove('amagar');
graph.classList.add('mostrar');
// graph.childNodes[3].src = './img/test_graph.jpeg';

id = circulo.sourceTarget.options.className;

pedir_historial_base(id);
}


function anyadir_marcadores(bases) {

    bases.forEach((base) => {
        base = base._source;
        if(base.porcentaje_ocupacion < 0.1) {
            var color = 'orange';
        } else if(base.porcentaje_ocupacion > 0.9) {
            var color = 'blue';
        } else {
            var color = 'black';
        }

        let latlong = base.location.split(',');
        let circle = L.circle(latlong, {
        	color,
        	fillColor: '#fdfdfd',
        	fillOpacity: 0.5,
        	radius: 25,
                className: base.id
        }).addTo(mymap).on("click", function (circulo) {
            showBaseGraph(circulo);
        });
        marcadores_bases.push(circle);
    })
}

// SET UP MAPA
const mymap = L.map('map').setView([39.987556,-0.0468827], 13);

function peticion_bases_actuales() {
    return $.ajax({ url: 'controladores/mapas.php?action=getBasesExistentes',
                 type: 'GET',
                 dataType: 'json',
                 success: function(response) {
                     bases_actuales = response.hits.hits
                    anyadir_marcadores(bases_actuales);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(errorThrown)
                }
        });
}
async peticion_async() {
    const res = await peticion_bases_actuales();
}
peticion_async();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
