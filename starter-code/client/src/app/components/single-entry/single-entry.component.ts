import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { JournalApiService } from '../../services/journal-api.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entryInfo: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private journalThang: JournalApiService,
    private routerThang: Router) { }

  ngOnInit() {
      this.activatedThang.params.subscribe((myParams) =>{
        this.journalThang.getOneJournalEntry(myParams.journalId)
          .subscribe ((theJournalFromApi) => {this.entryInfo = theJournalFromApi});
      });
  }

}
