import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseNumberComponent } from './tabs/case-number/case-number.component';
import { AdvocateNameComponent } from './tabs/advocate-name/advocate-name.component';

export const routes: Routes = [
  { path: '', redirectTo: 'case-number', pathMatch: 'full' },
  { path: 'case-number', component: CaseNumberComponent },
//   { path: 'fir-number', component: FirNumberComponent },
//   { path: 'party-name', component: PartyNameComponent },
  { path: 'advocate-name', component: AdvocateNameComponent },
//   { path: 'case-code', component: CaseCodeComponent },
//   { path: 'act', component: ActComponent },
//   { path: 'case-type', component: CaseTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
