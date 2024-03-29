import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() isNavbarToggle = new EventEmitter();
  togglenavBar(ev: any) {
    this.isNavbarToggle.emit(ev.target.checked)

  }
}
