import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public languageJSON = new BehaviorSubject<any>(null);
	public language$ = this.languageJSON.asObservable();

  constructor(private http: HttpClient) { }

  	// set's language json
	public setLanguageJSON(languageObs:any): void {
		languageObs.subscribe((data:any) => {
			this.languageJSON.next(data);
		});
	}

	public getData(url: string): Observable<any> {
		return this.http.get(environment.API_ENDPOINT + url,{});
	}

	public getSetUp(url: string): Observable<any> {
		return this.http.get(environment.setUpEndpoint + url,{});
	}

	public deleteData(url: string): Observable<any> {
		return this.http.delete(environment.API_ENDPOINT + url);
	}

	public saveData(url: string, body: any): Observable<any> {
		return this.http.post(environment.API_ENDPOINT + url, body);
	}

	saveBinaryData(url: string,data: any): Observable<any> {
		const headers = { 'removeheader': 'true' };
		return this.http.post(environment.API_ENDPOINT + url, data, { headers });
	}

	updateBinaryData(url: string,data: any): Observable<any> {
		const headers = { 'removeheader': 'true' };
		return this.http.put(environment.API_ENDPOINT + url, data, { headers });
	}

	public updateData(url: string, body: any): Observable<any> {
		return this.http.put(environment.API_ENDPOINT + url, body);
	}

	public uploadFile(file: File): Observable<any> {
		const url = `${environment.API_ENDPOINT}/api/import/workDetails`;
		const formData = new FormData();
		formData.append("excelFile", file, file.name);
		console.log(formData);
		console.log(formData.getAll('excelFile'));
		return this.http.post<any>(url, formData);
	}

	public uploadImage(file: File, id: string): Observable<any> {
		const url = `${environment.API_ENDPOINT}/api/images`;
		const formData = new FormData();
		formData.append("docFile", file, file.name);
		formData.append("winCode", id);
		console.log(formData);
		console.log(formData.getAll('docFile'));
		return this.http.put<any>(url, formData);
	}

	downloadPdf(queryParams: string): Observable<any> {
		const url = `${environment.API_ENDPOINT}` + queryParams;
		return this.http.get(url, { responseType: 'blob' });
	}

	downloadAllFilesAsZip(queryParams: string): Observable<Blob> {
		const url = `${environment.API_ENDPOINT}` + queryParams;
		const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json'
		  }),
		  responseType: 'blob' as 'json'
		};
		return this.http.get<Blob>(url, httpOptions);
	  }
	// downloadFilesAsZip(queryParams: string, data: any ): Observable<any> {
	// 	const url = `${environment.API_ENDPOINT}` + queryParams;
	// 	return this.http.get(url, { responseType: 'blob' });
	// }

	downloadFilesAsZip(queryParams: string, filenames: string[]): Observable<Blob> {
		const url = `${environment.API_ENDPOINT}` + queryParams;
		const httpOptions = {
		  headers: new HttpHeaders({
			'Content-Type': 'application/json'
		  }),
		  responseType: 'blob' as 'json'
		};
		return this.http.post<Blob>(url, filenames, httpOptions);
	  }
	
	public getPDFData(url: string): Observable<any> {
		return this.http.get(environment.API_ENDPOINT + url, { responseType: 'arraybuffer' });
	}
	downloadMultipleFilesAsZip(filenames: string[]): Observable<any> {
		return this.http.post(`${environment.API_ENDPOINT}/web/api/v1/download/zipDownload`, filenames, { responseType: 'blob' });
	  }

	  downloadPdfView(data: any, name: string) {
		const blob = new Blob([data], { type: 'application/pdf' });
		const link = document.createElement('a');
		link.href = window.URL.createObjectURL(blob);
		link.setAttribute('download', name);
		link.click();
	  }
}
