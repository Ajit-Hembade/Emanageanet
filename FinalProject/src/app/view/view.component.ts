import { Component,OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit  
{

  data:any;
  constructor(private s1:ServeService) { }

  ngOnInit(): void {
   let response = this.s1.viewrecord();
   response.subscribe((data1)=> this.data=data1)

  }
}
