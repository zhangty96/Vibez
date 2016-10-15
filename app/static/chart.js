
// below is the chart
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            marginBottom: 70,
            marginLeft:10,
            marginRight: 50
        },
        title: {
            text: 'Emotional Flow'
        },
        subtitle: {
            text: 'Source: Team VideoTracker'
        },
        xAxis: {
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
                yAxis: {title: {text: 'Percent'}},
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
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
        series: [{
            name: 'Sadness',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Distaste',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Joy',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Anger',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Fear',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});