import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-advocate-name',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
           ],
  templateUrl: './advocate-name.component.html',
  styleUrl: './advocate-name.component.scss'
})
export class AdvocateNameComponent {
  caseTypes = [
    { value: 'MINIMUM WASES Act 1948', label: 'MINIMUM WAGES Act 1948(MW)' },
    { value: 'TELANGANA SHOPS AND ESTABLISHMENT Act 1988(Section 48)', label: 'TELANGANA SHOPS AND ESTABLISHMENT Act 1988(SE) (Section 48)' },
    { value: 'TELANGANA SHOPS AND ESTABLISHMENT Act 1988(Section 50)', label: 'TELANGANA SHOPS AND ESTABLISHMENT Act 1988(SE) (Section 50)' },
    { value: 'Employees Compensation Act 1923(NON-FATAL)', label: 'Employees Compensation Act 1923(EC) (NON-FATAL)' },
    { value: 'Employees Compensation Act 1923(FATAL)', label: 'Employees Compensation Act 1923(EC) (FATAL)' },
    { value: 'PAYMENT OF WAGES Act 1936', label: 'PAYMENT OF WAGES Act 1936(PW)' },
    { value: 'PAYMENT OF GRATUITY Act 1972', label: 'PAYMENT OF GRATUITY Act 1972(PG)' },
  ];

  caseList: any;
  caseView: any;
  showList:boolean = false;
  isCaseView: boolean = false;
  captchaText: string = '';
  captchaError: string = '';

  queryParams = {
    pageNumber: '0',
    pageSize: '25',
    advocateName: '',
  }

   constructor(private apiService:ApiService){
       
    }

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captchaText = Array.from({ length: 6 })
      .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
      .join('');
    this.captchaError = '';
  }

  validateCaptcha(inputCaptcha: string): boolean {
    if (inputCaptcha.trim() === this.captchaText) {
      this.captchaError = '';
      return true;
    } else {
      this.captchaError = 'Invalid CAPTCHA. Please try again.';
      return false;
    }
  }
  changeCaptcha(){
    this.captchaError = '';
  }

  onSubmit(form: any): void {
    if (this.validateCaptcha(form.value.captcha)) {
      this.queryParams = { ...this.queryParams, advocateName:form.value.advocateName };
      const qpString = new URLSearchParams(this.queryParams).toString();
      this.apiService.getAllCaseList(qpString).subscribe((val:any) => {
        this.caseList = val.response.data;
        this.showList = true;
      })
    }
  }

  resetForm(): void {
    this.generateCaptcha();
  }

  viewCase(eve:any){
    this.apiService.getAllCaseView(`caseReferenceId=${eve.caseReferenceId}`).subscribe((list: any) => {
      this.caseView = list.response;
      this.isCaseView = true;
    });
  }

  bockToList(){
    this.isCaseView = false;
    this.showList = false;
  }

  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}
