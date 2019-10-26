let ejunt = [39.987556,-0.0468827];

let graph = document.getElementById('BaseGraph');
let btn_cerrar = document.getElementById('cerrar_g');

let marcadores_bases = [];

btn_cerrar.addEventListener('click', ()=> {
    graph.classList.remove('mostrar');
    graph.classList.add('amagar');
})

function anyadir_marcadores(data) {
    let bases = data.hits.hits;

    bases.forEach((base) => {

        if(base.porcentaje_ocupacion < 0.1) {
            var color = 'orange';
        } else if(base.porcentaje_ocupacion > 0.9) {
            var color = 'blue';
        }

        let circle = L.circle(ejunt, {
        	color,
        	fillColor: '#fdfdfd',
        	fillOpacity: 0.5,
        	radius: 25
        }).addTo(mymap).on("click", function (e) {
            showBaseGraph();
        });
        marcadores_bases.push(circle);
    })
}
function showBaseGraph() {
graph.classList.remove('amagar');
graph.classList.add('mostrar');

graph.childNodes[3].src = './img/test_graph.jpeg';
console.log(graph.childNodes[2]);
}

$.ajax({ url: 'controladores/mapas.php?action=getBasesExistentes',
         type: 'POST',
         dataType: 'json',
         success: function(response) {
            anyadir_marcadores(response);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown)
        }
});


// SET UP MAPA
const mymap = L.map('map').setView([39.987556,-0.0468827], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    let circle = L.circle(ejunt, {
    	color: 'red',
    	fillColor: '#f03',
    	fillOpacity: 0.5,
    	radius: 25
    }).addTo(mymap).on("click", function (e) {
        showBaseGraph();
    });
