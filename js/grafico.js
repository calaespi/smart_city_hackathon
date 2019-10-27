var ctx = document.getElementById('myChart').getContext('2d');

function pedir_historial_base(id) {
    let url = 'controladores/mapas.php?action=getDataBasesInterval&id='+id;
    console.log(url);
    $.ajax({ url,
                 type: 'GET',
                 dataType: 'json',
                 success: function(response) {
                     crear_grafico(response)
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(errorThrown)
                }
        });
}

function crear_grafico(respuesta) {

    let valores = [];
    let data = respuesta.aggregations.buckets;
    let time = data.map((entrada)=>{
        return entrada.key_as_string.splite('T')[1].splite(':')[0];
    });
    let info = data.map((entrada)=> {
        return entrada.doc_count;
    });
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Ocupación por horas',
                data: info,
                backgroundColor: 'rgb(155, 200, 155)',
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            color: "rgba(255,99,132,0.2)"
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
        }
    });
    myChart.canvas.parentNode.style.height = '400px';
    myChart.canvas.parentNode.style.width = '400px';
}
