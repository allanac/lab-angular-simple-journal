import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {JournalInfo} from '../../interfaces/journal-info';
import { JournalApiService } from '../../services/journal-api.service';

@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {

  newEntry: JournalInfo = {
    title: '',
    content: ''
  };

  errorMessage: string;
  @Output() newEntryNotifier = new EventEmitter();

  constructor(private journalThang: JournalApiService) { }

  ngOnInit() {
  }

  saveNewEntry() {
      this.journalThang.postJournalEntry(this.newEntry)
        .subscribe((fullEntryDetails) => {
          console.log('New Entry Success', fullEntryDetails);
          this.newEntryNotifier.emit(fullEntryDetails);
          
            this.errorMessage = '';
            this.newEntry = {
                title: '',
                content: ''
            };
        },
        (errorInfo) => {
            console.log(errorInfo);
            if (errorInfo.status === 400) {
                this.errorMessage = 'Validation Error.'
            }
            else{this.errorMessage = "Unknown error. Try again Later"}
        }
      );
  }

}
