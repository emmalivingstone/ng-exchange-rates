import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowResponse } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private apiURL = 'https://api.themoviedb.org/';
  private apiKeyParam = `?api_key=${environment.apiKey}`;
  private languageParam = `&language=en-US`;

  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get<ShowResponse>(`${this.apiURL}3/tv/popular${this.apiKeyParam}${this.languageParam}&page=1`);
  }

  getLatest() {
    return this.http.get<ShowResponse>(`${this.apiURL}3/tv/latest${this.apiKeyParam}${this.languageParam}&page=1`);
  }

  getTopRated() {
    return this.http.get<ShowResponse>(`${this.apiURL}3/tv/top_rated${this.apiKeyParam}${this.languageParam}&page=1`);
  }
}
