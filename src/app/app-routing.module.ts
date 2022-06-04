import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './section/home/home.component';
import { NewsComponent } from './section/news/news.component';
import { SingleNewsComponent } from './section/news/single-news/single-news.component';
import { ResultsComponent } from './section/results/results.component';
import { TeamsComponent } from './section/teams/teams.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: SingleNewsComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
