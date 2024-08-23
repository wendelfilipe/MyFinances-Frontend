import React from "react";
import Chart from "react-apexcharts";

const GraphicHomeWeek = () => {

    const date = new Date();
    const dateFormated = date.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date1 = new Date()
    date1.setDate(date1.getDate() -1);
    const dateFormated1 = date1.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date2 = new Date()
    date2.setDate(date2.getDate() -2);
    const dateFormated2 = date2.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date3 = new Date()
    date3.setDate(date3.getDate() -3);
    const dateFormated3 = date3.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date4 = new Date()
    date4.setDate(date4.getDate() -4);
    const dateFormated4 = date4.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date5 = new Date()
    date5.setDate(date5.getDate() -5);
    const dateFormated5 = date5.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});

    const date6 = new Date()
    date6.setDate(date6.getDate() -6);
    const dateFormated6 = date6.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit'});
    const options = {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [5, 7, 5],
              curve: 'straight',
              dashArray: [0, 8, 5]
            },
            title: {
              text: 'Page Statistics',
              align: 'left'
            },
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
              }
            },
            markers: {
              size: 1,
              hover: {
                sizeOffset: 6
              }
            },
            xaxis: {
              categories: [dateFormated6, dateFormated5, dateFormated4, dateFormated3, dateFormated2, dateFormated1, dateFormated],
            },
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val + " (mins)"
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val + " per session"
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val;
                    }
                  }
                }
              ]
            },
            grid: {
              borderColor: '#f1f1f1',
            }
    };

    const series = [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62]
      }
    ];

      


    return (
      <div className="container-graphic">
        <div className="graphic">
            <Chart
              options={options}
              series={series}
              type="line"
              width="100%"
            />
        </div>
      </div>
    )
}

export default GraphicHomeWeek;


