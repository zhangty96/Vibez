
// below is the chart
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1},
              stops: [[0, '#2a2a2b'], [1, '#2a2a2b']]
            },
            marginTop: 10,
            marginBottom: 70,
            marginLeft:0,
            marginRight: 0,
            backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#1a1d38'],
                [1, '#1a1d38']
                ]
             },
        },
        title: {
            text: ''
        },
        subtitle: {
            enabled: false
        },
        xAxis: {
            categories: seg_locs,
            tickmarkPlacement: 'on',
            labels: {style: {color: '#E0E0E3'}},
        },
                yAxis: {title: {text: 'Percent'}},
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
            split: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                enabled: false
                }
            },
        },
        legend: {
            itemStyle: {color: '#E0E0E3'},
            itemHoverStyle: {color: '#FFF'},
            itemHiddenStyle: {color: '#606063'}
        },
        series: emotions
    });
});
