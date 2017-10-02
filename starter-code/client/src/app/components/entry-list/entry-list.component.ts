import { Component, OnInit } from '@angular/core';

import { JournalApiService } from '../../services/journal-api.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {

  entries: any[] = [];

  constructor(private journalThang:JournalApiService) { }

  ngOnInit() {
    this.journalThang.getJournalEntries()
      .subscribe(
        (journalsFromApi: any[]) => {
          this.entries = journalsFromApi;
          console.log(journalsFromApi);
        }
      );
  }

}
