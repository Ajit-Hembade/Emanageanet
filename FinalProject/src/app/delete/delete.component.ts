import { Component } from '@angular/core';
import { ServeComponent } from '../serve/serve.component';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private s1: ServeService) { }

  deletedata(insertform:{value:any})
  {
    
    
      return this.s1.deletedata1(insertform.value).subscribe();
    

  }
}
