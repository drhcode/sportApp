import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './section/home/home.component';
import { TeamsComponent } from './section/teams/teams.component';
import { ResultsComponent } from './section/results/results.component';
import { NewsComponent } from './section/news/news.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
<<<<<<< HEAD
import { SingleNewsComponent } from './section/news/single-news/single-news.component';
import { SecondNewsComponent } from './section/news/second-news/second-news.component';
import { ThirdNewsComponent } from './section/news/third-news/third-news.component';
=======
import { TeamplayersPipe } from './shared/pipes/teamplayers.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BestPlayer } from './shared/pipes/best-player.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlayersComponent } from './section/teams/players/players/players.component';
import { SearchPipePipe } from './shared/pipes/search-pipe.pipe';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PlayermodalComponent } from './playermodal/playermodal.component';
import { HeaderComponent } from './core/header/header.component';
import { StatisticsComponent } from './section/statistics/statistics.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
>>>>>>> 98ecbd48615bdbcc44076deb4e655204e7a030af

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    ResultsComponent,
    NewsComponent,
    NavbarComponent,
<<<<<<< HEAD
    SingleNewsComponent,
    SecondNewsComponent,
    ThirdNewsComponent,
=======
    TeamplayersPipe,
    PlayersComponent,
    SearchPipePipe,
    PlayermodalComponent,
    HeaderComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    Ng2SearchPipeModule,
>>>>>>> 98ecbd48615bdbcc44076deb4e655204e7a030af
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
