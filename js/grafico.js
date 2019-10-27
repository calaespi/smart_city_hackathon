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
    let data = respuesta.aggregations[3].buckets;
    
    let time = data.map((entrada)=>{
        let time_array = entrada.key_as_string.split('T');
        if (time_array[0] !== '1970-01-19') {
            return time_array[1].split(':')[0];
        }
    });
    
    time = time.filter(function (el) {
        return el != null;
      });
    
    let info = data.map((entrada)=> {
        let time_array = entrada.key_as_string.split('T');
        if (time_array[0] !== '1970-01-19') {
            return entrada.doc_count;
        }
    });
    
    info = info.filter(function (el) {
        return el != null;
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
    myChart.canvas.parentNode.style.width = '50%';
}
