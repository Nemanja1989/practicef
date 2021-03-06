import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TeamListComponent} from './components/team-list/team-list.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PlayersComponent} from './components/players/players.component';
import {AppRoutingModule} from './routing/routing.module';
import {TeamsService} from './services/teams.service';
import {TeamsListPipe} from './pipes/teams-list.pipe';
import {FormsModule} from '@angular/forms';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamRowComponent } from './components/team-row/team-row.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        TeamListComponent,
        LayoutComponent,
        NavbarComponent,
        PlayersComponent,
        TeamsListPipe,
        AddTeamComponent,
        TeamRowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        TeamsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
