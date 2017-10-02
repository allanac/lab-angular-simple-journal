import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { JournalApiService } from './services/journal-api.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';
import { EntryFormComponentComponent } from './components/entry-form-component/entry-form-component.component';

const myRoutes: Routes = [
  {path: '', component: EntryListComponent},
  {path: 'journal-entries/:journalId', component:SingleEntryComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [JournalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
