import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  navbarFunction(ev: any) {
    const toggle:any = document.querySelector('.sliderbar'); // Use querySelector to select by class
    console.log(ev);
    if (toggle) { // Check if toggle is not null or undefined
      if (ev) {
        toggle.style.left = '0'; // Slide in from the left
      } else {
        toggle.style.left = '-100%'; // Slide out to the left
      }
    }
  }
  
  
  


}
