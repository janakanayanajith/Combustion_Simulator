 window.onload = function() {r()}

    Tmax=[1848.6,1873,1904.6,1967.9,1994.2,2014.1,2028.8,2025.9,2001.4,1932.9,1775.4,1649.9]
    img=[0.3,0.4,0.5,0.7,0.8,0.85,0.9,0.95,1,1.1,1.2,1.4]
 function resize () {
    drawTChart();
    drawNOxChart();
    drawQChart();

    drawCH4Chart();
    drawCOChart();
    drawH2OChart();
}
window.onresize  = resize;


    function r() {
    drawTChart();
    drawNOxChart();
    drawQChart();

    drawCH4Chart();
    drawCOChart();
    drawH2OChart();
document.getElementById('T').innerHTML = Tmax[document.getElementById('eq').value];
document.getElementById('profile').src = 'img/'+img[document.getElementById('eq').value]+'.png';
    }

google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawTChart);
//google.charts.setOnLoadCallback(drawNOxChart);

      function drawTChart() {

        chtData=[['Axial Distance', 'Temperature']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],T[document.getElementById('eq').value][i]]);
        }
 var data = google.visualization.arrayToDataTable(chtData);
        var options = {
          title: 'Temperature profile',
          hAxis: {title: 'Axial Distance (m)', minValue: 0},
          vAxis: {title: 'Temperature (C)', minValue: 0, maxValue: 2200},
          legend: 'none',
          curveType: 'function',
          pointSize: 0,

        };
            var chart = new google.visualization.ComboChart(document.getElementById('T_Chart'));
        chart.draw(data, options);
}


     function drawNOxChart() {

        chtData=[['Axial Distance', 'NOx']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],NOxp[document.getElementById('eq').value][i]]);
        }
          var data = google.visualization.arrayToDataTable(chtData);
        var options = {
          title: 'NOx profile',
          hAxis: {title: 'Axial Distance (m)', minValue: 0},
          vAxis: {title: 'NOx (kg/m3) E+6', minValue: 0},
          legend: 'none',
          curveType: 'function',
          pointSize: 0,

        };

       var chart = new google.visualization.ComboChart(document.getElementById('NOx_Chart'));
        chart.draw(data, options);
}
             function drawQChart() {

        chtData=[['Axial Distance', 'Heat release']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],Qp[document.getElementById('eq').value][i]]);
        }
        var data = google.visualization.arrayToDataTable(chtData);
        var options = {
          title: 'Heat release',
          hAxis: {title: 'Axial Distance (m)', minValue: 0},
          vAxis: {title: 'Heat release (J/m3s)', minValue: 0},
          legend: 'none',
          curveType: 'function',
          pointSize: 0,

        };
                    var chart = new google.visualization.ComboChart(document.getElementById('Q_Chart'));
        chart.draw(data, options);
}

      function drawCH4Chart() {

        chtData=[['Axial Distance', 'CH4']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],CH4[document.getElementById('eq').value][i]]);
        }
     var data = google.visualization.arrayToDataTable(chtData);
            var options = {
              title: 'CH4 profile',
              hAxis: {title: 'Axial Distance (m)', minValue: 0},
              vAxis: {title: 'CH4 (kg/m3)', minValue: 0},
              legend: 'none',
              curveType: 'function',
              pointSize: 0,

        };
            var chart = new google.visualization.ComboChart(document.getElementById('CH4_Chart'));
        chart.draw(data, options);
    }


     function drawCOChart() {

        chtData=[['Axial Distance', 'CO']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],CO[document.getElementById('eq').value][i]]);
        }
          var data = google.visualization.arrayToDataTable(chtData);
        var options = {
          title: 'CO profile',
          hAxis: {title: 'Axial Distance (m)', minValue: 0},
          vAxis: {title: 'CO (kg/m3)', minValue: 0},
          legend: 'none',
          curveType: 'function',
          pointSize: 0,

        };

       var chart = new google.visualization.ComboChart(document.getElementById('CO_Chart'));
        chart.draw(data, options);
}
             function drawH2OChart() {

        chtData=[['Axial Distance', 'H2O']]
        for (let i = 0; i < AxialDistance.length; i++) {
        chtData.push([AxialDistance[i],H2O[document.getElementById('eq').value][i]]);
        }
        var data = google.visualization.arrayToDataTable(chtData);
        var options = {
          title: 'H2O profile',
          hAxis: {title: 'Axial Distance (m)', minValue: 0},
          vAxis: {title: 'H2O (kg/m3)', minValue: 0},
          legend: 'none',
          curveType: 'function',
          pointSize: 0,

        };
                    var chart = new google.visualization.ComboChart(document.getElementById('H2O_Chart'));
        chart.draw(data, options);
}
