import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { NationalWorkComponent } from './work/national-work/national-work.component';
import { InternationalWorkComponent } from './work/international-work/international-work.component';
import { RegionalWorkComponent } from './work/regional-work/regional-work.component';
import { ErrorComponent } from './error/error.component';
import { ModalComponent } from './modal/modal.component';
import { CategoryPipePipe } from './category-pipe.pipe';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    HistoryComponent,
    EventsComponent,
    PublicationsComponent,
    NationalWorkComponent,
    InternationalWorkComponent,
    RegionalWorkComponent,
    ErrorComponent,
    ContactComponent,
    ModalComponent,
    CategoryPipePipe,
    NewsComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Wpng2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
