import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { TeamComponent } from './team/team.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';
import { PublicationsComponent } from './publications/publications.component';
import { NationalWorkComponent } from './work/national-work/national-work.component';
import { InternationalWorkComponent } from './work/international-work/international-work.component';
import { RegionalWorkComponent } from './work/regional-work/regional-work.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'historia',
    component: HistoryComponent,
    pathMatch: 'full'
  },
  {
    path: 'equipo',
    component: TeamComponent,
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    component: NewsComponent,
    pathMatch: 'full'
  },
  {
    path: 'trabajo/internacional',
    component: InternationalWorkComponent,
    pathMatch: 'full'
  },
  {
    path: 'trabajo/nacional',
    component: NationalWorkComponent,
    pathMatch: 'full'
  },
  {
    path: 'trabajo/autonomico',
    component: RegionalWorkComponent,
    pathMatch: 'full'
  },
  {
    path: 'publicaciones',
    component: PublicationsComponent,
    pathMatch: 'full'
  },
  {
    path: 'temas',
    component: SubjectsComponent,
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    component: EventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: 'factsheets/:slug',
    component: PostSingleComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  { 
    path: '**', 
    component: ErrorComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

// probably change and export as Hbscng2RoutingModule
export class Wpng2RoutingModule { }
