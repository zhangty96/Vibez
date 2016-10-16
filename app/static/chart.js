
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
            categories: seg_locs,
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
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
