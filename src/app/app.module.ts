import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './section/home/home.component';
import { TeamsComponent } from './section/teams/teams.component';
import { ResultsComponent } from './section/results/results.component';
import { NewsComponent } from './section/news/news.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamplayersPipe } from './shared/pipes/teamplayers.pipe';
import { HttpClientModule } from '@angular/common/http';
// import { BestPlayer } from './shared/pipes/best-player.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeComponent,
    TeamsComponent,
    ResultsComponent,
    NewsComponent,
    NavbarComponent,
    TeamplayersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
