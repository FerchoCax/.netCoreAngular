import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portafolio-app';
  public cards:Array<any>=[];
  ngOnInit(): void {
    this.cards =[
      {
        tittle:"video 1",
        subtittle:"subititulo 1",
        img:"https://picsum.photos/536/354"
      },
      {
        tittle:"video 2",
        subtittle:"subititulo 2",
        img:"https://picsum.photos/536/354"
      },
      {
        tittle:"video 3",
        subtittle:"subititulo 3",
        img:"https://picsum.photos/536/354"
      }
    ]
   }
}
