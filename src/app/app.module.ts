import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TeamListComponent} from './components/team-list/team-list.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PlayersComponent} from './components/players/players.component';
import {AppRoutingModule} from './routing/routing.module';


@NgModule({
    declarations: [
        AppComponent,
        TeamListComponent,
        LayoutComponent,
        NavbarComponent,
        PlayersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
