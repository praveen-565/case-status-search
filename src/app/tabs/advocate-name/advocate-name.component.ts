import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  captchaText: string = '';
  captchaError: string = '';

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
      alert('Form submitted successfully with data: ' + JSON.stringify(form.value));

    }
  }

  resetForm(): void {
    this.generateCaptcha();
  }
}
