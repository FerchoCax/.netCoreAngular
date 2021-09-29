import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dataEntrante:any;
  public image!:string;
  constructor() { }

  ngOnInit(): void {
    this.image ="https://picsum.photos/536/354";
    console.log("Entrando data: ", this.dataEntrante);
  }

}
