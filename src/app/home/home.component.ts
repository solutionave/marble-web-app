import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab: string = 'wholesaler'; // Default active tab

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
