import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  count: any = 0;
  ngOnInit(): void {
    console.log("suma", ++this.count);
    console.log("lksdhf")
    
  }

  ngOnDestroy() {
    console.log("killed")
  }
}
