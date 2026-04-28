import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ContactRequest, ContactResponse } from '../models/contact-request.model';

@Injectable({
  providedIn: 'root',
})
export class ContactApiService {
  private readonly apiUrl = environment.appApiUrl;

  constructor(private http: HttpClient) {}

  submit(payload: ContactRequest) {
    return this.http.post<ContactResponse>(`${this.apiUrl}/contact`, payload);
  }
}
