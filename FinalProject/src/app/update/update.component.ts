import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private s1:ServeService){}
  updatedata(insertform:{value:any;})
  {
    return this.s1.updatedata1(insertform.value).subscribe();
  }

}
