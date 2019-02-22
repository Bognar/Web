import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public polarAreaChartLabels:string[] = ['HTML', 'CSS', 'javaScript', 'Bootstrap', 'jQuery', 'Angular', 'Firebase', 'NodeJS', 'ChartsJS', 'Ionic'];
  public polarAreaChartData:number[] = [80, 80, 60, 80, 60, 50, 40, 40, 60, 50];
  public polarAreaLegend:boolean = true;
  public polarAreaOptions:any ={
   legend:{ 
     position:'right',
     labels: {
     boxWidth:10
     }
   }
  };
  public polarAreaChartType:string = 'polarArea';
  
  constructor() { }

 visitor = localStorage.getItem('visitor');
 disable:boolean = false;
 monkey:number = 20;
  ngOnInit() {
  }
  monkeygo() {
    if(true){
    return this.monkey +=10;
    }
  }
  monkeyreset() {
    return this.monkey = 20;
  }
 saveData(){
    this.disable = true;
    localStorage.setItem('visitor', this.visitor);
  }

}

