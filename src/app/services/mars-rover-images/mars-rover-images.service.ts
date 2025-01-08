import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from '../../constants/URL';
import { ENDPOINTS } from '../../constants/endpoints';
import { API_KEY } from '../../constants/API_KEY';
import { MarsRoverPhotos } from '../../interfaces/mars-rover-image.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverImagesService {

  constructor(private readonly http: HttpClient) { }

  public getMarsRoverImages(pageAmount: number): Observable<MarsRoverPhotos> {
    return this.http.get<MarsRoverPhotos>(`${URL.NASA_API}/${ENDPOINTS.MARS_ROVER_IMAGES}${pageAmount}&api_key=${API_KEY.KEY}`)
  }
}
