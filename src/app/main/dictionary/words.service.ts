import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  model = 'words';

  constructor(private http: HttpClient) { }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(word) {
    return this.http.post(this.getUrl(), word);
  }

  update(word) {
    return this.http.put(this.getUrlWithID(word.id), word);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id));
  }
}
