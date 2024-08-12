import React from "react";
import Chart from "react-apexcharts";

const GraphicHomeMonth = () => {

    //4° week, the last week of month
    const date = new Date();

    const date1 = new Date();
    date1.setDate(date1.getDate() -7);

    const dateFormated4 = `${date1.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})} até 
        ${date.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})}`;
    
    //3° week
    const date2 = new Date();
    date2.setDate(date2.getDate() -14);

    const dateFormated3 = `${date2.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})} até
        ${date1.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})}`;

    //2° week

    const date3 = new Date();
    date3.setDate(date3.getDate() -21);

    const dateFormated2 = `${date3.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})} até
        ${date2.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})}`;

    //1° week
    const date4 = new Date();
    date4.setDate(date4.getDate() -28);

    const dateFormated1 = `${date4.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})} até
        ${date3.toLocaleString('pt-BR', {day: '2-digit', month: '2-digit'})}`;

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
          categories: [dateFormated1, dateFormated2, dateFormated3, dateFormated4],
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
        data: [45, 52, 38, 24]
    },
    {
        name: "Page Views",
        data: [35, 41, 62, 42]
    },
    {
        name: 'Total Visits',
        data: [87, 57, 74, 99]
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

export default GraphicHomeMonth;