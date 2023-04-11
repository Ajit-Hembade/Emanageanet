import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

constructor(private s1:ServeService){}

  insertdata(insertform:{value:any;})
  {
    return this.s1.insertdata1(insertform.value).subscribe();
  }

}
