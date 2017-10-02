import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JournalInfo } from '../interfaces/journal-info';

@Injectable()
export class JournalApiService {

  baseUrl: string = "http://localhost:3000";

  constructor(private httpThang: HttpClient) { }

  getJournalEntries(){
    return this.httpThang.get(
        this.baseUrl + '/api/journal-entries');
  }

  getOneJournalEntry(journalId: string) {
    return this.httpThang.get(
        this.baseUrl + '/api/journal-entries/' + journalId);
  }

  postJournalEntry(journalFields: JournalInfo) {
      return this.httpThang.post(
        this.baseUrl + '/api/journal-entries', journalFields
      );
  }

}
