
// below is the chart
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area',
            marginTop: 10,
            marginBottom: 70,
            marginLeft:10,
            marginRight: 10
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
        series: emotions
    });
});
