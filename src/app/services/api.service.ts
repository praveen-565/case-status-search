import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private crudService : CrudService) { }

  getAllCaseList(qpString: any) {
    return this.crudService.getData(`/public/api/v1/ecasefiling?${qpString}`);
  }

     // List of Employees
  getAllCaseView(qstring:any) {
      return this.crudService.getData(`/public/api/v1/ecasefiling/view?${qstring}`);
  }

}
