import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService){
    headerService.headerData = {
      title: 'Inicio',
      icon: 'home'
    }
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }
}
