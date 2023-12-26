import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private trainviewURL = 'http://localhost:8080/Train/viewtrain';
  private savetrainURL = 'http://localhost:8080/Train/addTrain';
  private updatetrainURL = 'http://localhost:8080/Train/update';
  private gettrainByIdURL = 'http://localhost:8080/Train/train_id/{Id}';
  private deletetrainByIdURL = 'http://localhost:8080/Train/delete/{Id}';
  constructor(private http: HttpClient) {}

  getTrainById(trainId: number): Observable<Train> {
    const url = this.gettrainByIdURL.replace('{Id}', trainId.toString());
    return this.http.get<Train>(url);
  }
  getAllTrain(): Observable<any> {
    return this.http.get(this.trainviewURL);
  }
  createTrain(train: Train): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'auth-token',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post<Train>(this.savetrainURL, train, httpOptions);
  }
  updateTrain(train: Train): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(train);
    return this.http.put(this.updatetrainURL, body, { headers: headers });
  }
  deleteTrainById(trainId: number): Observable<Train> {
    const url = this.deletetrainByIdURL.replace('{Id}', trainId.toString());
    return this.http.delete<Train>(url);
  }
}
