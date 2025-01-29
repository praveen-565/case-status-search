import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from "./tabs/tabs.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TabsComponent]
})
export class AppComponent {
  title = 'case-status-search';
}
