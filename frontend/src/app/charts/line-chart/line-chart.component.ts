import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  data: any;

  public chart: any;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.data = this.getData();
    this.createChart();
  }

  createChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.chart = new Chart(htmlRef, this.data);
  }

  getData(): any {
    return {
      type: 'line', //Tipo de gráfico (aqui é o de linha)
      data: {
        // Percorre os horários do dia
        labels: ['10:05','10:25','10:45','11:05'
                ,'11:25','11:45','12:05','12:25'
                ,'12:45','13:05','13:25','13:45'
                ,'14:05','14:25','14:45','15:05'
                ,'15:25','15:45','16:05','16:25'
                ,'16:45','17:05','17:25','17:45'
                ],
        datasets: [
          {
            label: "Compras",
            data: [//compras de determinada ação em determinada data; cada = sum(valor_de_compra) na data i / count(valor_de_compra) na data i
              '467','576', '572', '79'
              ,'192','1574', '573', '576'
              ,'292','2574', '573', '57'
              ,'392','3574', '573', '570'
              ,'921','571', '173', '579'
              ,'922','572', '273', '571'
            ],
            backgroundColor: 'red'
          },
          {
            label: "Vendas",
            data: [//vendas de determinada ação em determinada data; cada valor = sum(valor_de_venda) na data i / count(valor_de_venda) na data i
              '542', '542', '536', '327'
              , '17', '0.00', '538', '541'
              , '11', '0.10', '518', '542'
              , '12', '1.00', '528', '544'
              , '13', '2.10', '138', '543'
              , '14', '0.20', '338', '546'
            ],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:0.5
      }

    }
  }
}
