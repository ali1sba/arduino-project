
Highcharts.chart('container1', {
  chart: {
    type: 'line',
    backgroundColor: "rgba(255, 255, 255, 0.2)",

  },
  title: {
    text: 'Temperature'
  },
  
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'values'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'celcius',
    color:"#ed553b",
    data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    name: 'fehrenheit',
    color:"#173f5f",
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
});
Highcharts.chart('container2', {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
    text: 'humidity'
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10'
    }
  },

  yAxis: {
    type: 'rain',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000'
    }
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
  },

  series: [{
    color:"#173f5f",
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
  }]
});

Highcharts.chart('container3', {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
    text: 'W I N D'
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10'
    }
  },

  yAxis: {
    type: 'rain',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000'
    }
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
  },

  series: [{
    color:"#173f5f",
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
  }]
});Highcharts.chart('container4', {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
    text: 'Pressure'
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10'
    }
  },

  yAxis: {
    type: 'rain',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000'
    }
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
  },

  series: [{
    color:"#173f5f",
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
  }]
});Highcharts.chart('container5', {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
    text: 'R A I N'
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10'
    }
  },

  yAxis: {
    type: 'rain',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000'
    }
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
  },

  series: [{
    color:"#173f5f",
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
  }]
});Highcharts.chart('container6', {
  chart: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  title: {
    text: 'P D R'
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10'
    }
  },

  yAxis: {
    type: 'rain',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000'
    }
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
  },

  series: [{
    color:"#173f5f",
    data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    pointStart: 1
  }]
});
