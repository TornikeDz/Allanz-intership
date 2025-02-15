import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../constants/URL';
import { ENDPOINTS } from '../constants/endpoints';
import { API_KEY } from '../constants/API_KEY';
import { Observable } from 'rxjs';
import { DailyPictureData } from '../interfaces/daily-picture-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DailyPictureService {

  constructor(private readonly http: HttpClient) { }

  public getDailyPicture(): Observable<DailyPictureData> {
    return this.http.get<DailyPictureData>(`${URL.NASA_API}/${ENDPOINTS.PLANETARY}/${ENDPOINTS.DAILY_IMAGE}${API_KEY.KEY}`)
  }
}
