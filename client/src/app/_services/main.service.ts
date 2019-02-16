import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class MainService{
  constructor(
    private http: HttpClient
  ){ }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getSampleJson(): Observable<any> {
    return this.http.get('assets/sample.json').pipe(
      map((response: Response) => response));
  }

/*  getSampleJson(){
   /!* var data = this.http.get<Object>('assets/sample.json');
    return data;*!/
    return this.http.get('assets/sample.json').map((response: Response) => response.json());  }*/

}
