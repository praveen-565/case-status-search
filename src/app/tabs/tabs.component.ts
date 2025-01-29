import { Component } from '@angular/core';
import { CaseNumberComponent } from "./case-number/case-number.component";
import { AdvocateNameComponent } from "./advocate-name/advocate-name.component";
import { RouterEvent, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PartyNameComponent } from './party-name/party-name.component';
import { CaseTypeComponent } from './case-type/case-type.component';

@Component({
  selector: 'app-tabs',
  standalone:true,
  imports: [CaseNumberComponent, AdvocateNameComponent,CommonModule,PartyNameComponent,CaseTypeComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  activeTab: string = 'caseNumber';

  tabs: any[] = [
    { id: 'caseNumber', label: 'Case Number', icon: 'fa fa-file-alt', isActive: true },
    { id: 'partyName', label: 'Party Name', icon: 'fa fa-users', isActive: false },
    { id: 'advocateName', label: 'Advocate Name', icon: 'fa fa-user-tie', isActive: false },
    { id: 'caseType', label: 'Case Type', icon: 'fa fa-gavel', isActive: false }
  ];

  activateTab(tabId: string): void {
    this.tabs.forEach(tab => tab.isActive = tab.id === tabId);
    this.activeTab = tabId;
  }

  constructor(){

  }

  ngOnInit(): void {
    // this.initializeCaptcha();
    // this.dataSharingService.isSetUp$.subscribe((isSetUp) => {
    //   this.isSetUp = isSetUp;
    // });
  }
}
