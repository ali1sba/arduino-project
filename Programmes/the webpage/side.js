
const tabBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");

function tabs(panelIndex) {
  tab.forEach(function (node) {
    node.style.display = "none";
  });
  tab[panelIndex].style.display = "block";
}

tabs(0);

$(".tab").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/*graphs*/
var chartT = new Highcharts.Chart({
  chart: {
      renderTo: 'chart-temperature',
      backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  title: { text: ' Temperature' },
  series: [{
      name: 'T',
      showInLegend: false,
      data: [1, 2, 3, 4]
  }],
  plotOptions: {
      line: {
          animation: false,
          dataLabels: { enabled: true }
      },
      series: { color: '#059e8a' }
  },

  xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
  },

  yAxis: {
      title: { text: 'Temperature (Celsius)' }
      //title: { text: 'Temperature (Fahrenheit)' }
  },
  credits: { enabled: false }
});
setInterval(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var x = (new Date()).getTime(),
              y = parseFloat(this.responseText);
          //console.log(this.responseText);
          if (chartT.series[0].data.length > 40) {
              chartT.series[0].addPoint([x, y], true, true, true);
          } else {
              chartT.series[0].addPoint([x, y], true, false, true);
          }
      }
  };
  xhttp.open("GET", "/temperature", true);
  xhttp.send();
}, 30000);

var chartH = new Highcharts.Chart({
  chart: {
      renderTo: 'chart-humidity',
      backgroundColor: "rgba(255, 255, 255, 0.3)"
  },
  title: { text: 'BME280 Humidity' },
  series: [{
      showInLegend: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }],
  plotOptions: {
      line: {
          animation: false,
          dataLabels: { enabled: true }
      },
      series: { color: '#555577' }
  },
  xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
      title: { text: 'Humidity (%)' }
  },
  credits: { enabled: false }
});
setInterval(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var x = (new Date()).getTime(),
              y = parseFloat(this.responseText);
          //console.log(this.responseText);
          if (chartH.series[0].data.length > 40) {
              chartH.series[0].addPoint([x, y], true, true, true);
          } else {
              chartH.series[0].addPoint([x, y], true, false, true);
          }
      }
  };
  xhttp.open("GET", "/humidity", true);
  xhttp.send();
}, 30000);

var chartP = new Highcharts.Chart({
  chart: {
      renderTo: 'chart-pressure',
      backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  title: { text: 'BME280 Pressure' },
  series: [{
      showInLegend: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }],
  plotOptions: {
      line: {
          animation: false,
          dataLabels: { enabled: true }
      },
      series: { color: '#18009c' }
  },
  xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
      title: { text: 'Pressure (hPa)' }
  },
  credits: { enabled: false }
});
setInterval(function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var x = (new Date()).getTime(),
              y = parseFloat(this.responseText);
          //console.log(this.responseText);
          if (chartP.series[0].data.length > 40) {
              chartP.series[0].addPoint([x, y], true, true, true);
          } else {
              chartP.series[0].addPoint([x, y], true, false, true);
          }
      }
  };
  xhttp.open("GET", "/pressure", true);
  xhttp.send();
}, 30000);