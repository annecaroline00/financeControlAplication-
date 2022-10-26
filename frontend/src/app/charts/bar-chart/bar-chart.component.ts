import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

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
    console.log('context = ' + htmlRef);
    this.chart = new Chart(htmlRef, this.data);
  }

  getData(): any {
    return {
      type: 'bar', //Tipo de gráfico (aqui é o de linha)
      data: {
        // Percorre as datas de cada lançamento de determinada ação
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17',
                ],
        datasets: [
          {
            label: "Compras",
            data: [//compras de determinada ação em determinada data; cada = sum(valor_de_compra) na data i / count(valor_de_compra) na data i
              '467','576', '572', '79'
              ,'92','574', '573', '576'
            ],
            backgroundColor: 'red'
          },
          {
            label: "Vendas",
            data: [//vendas de determinada ação em determinada data; cada valor = sum(valor_de_venda) na data i / count(valor_de_venda) na data i
              '542', '542', '536', '327'
              , '17', '0.00', '538', '541'
            ],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:1.5
      }

    }
  }
}
