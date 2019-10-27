var ctx = document.getElementById('myChart').getContext('2d');

function pedir_historial_base(id) {
    let url = 'controladores/mapas.php?action=getDataBasesInterval&id='+id;
    $.ajax({ url,
                 type: 'GET',
                 dataType: 'json',
                 success: function(response) {
                     console.log(response);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log(errorThrown)
                }
        });
}



ctx.height = 500;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['00', '01', '02', '03', '04', '05','06', '07', '08', '09', '10', '11','12', '13', '14', '15', '16', '17','18', '19', '20', '21', '22', '23'],
        datasets: [{
            label: 'Ocupación por horas',
            data: [2, 2, 3, 5, 2, 3, 2, 2, 3, 5, 2, 3, 2, 2, 3, 5, 2, 3, 2, 2, 3, 5, 2, 3],
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
