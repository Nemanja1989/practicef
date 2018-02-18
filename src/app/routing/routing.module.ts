import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {TeamListComponent} from '../components/team-list/team-list.component';
import {PlayersComponent} from '../components/players/players.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class RoutingModule {
}

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/teams',
        pathMatch: 'full'
    },
    {
        path: 'teams',
        component: TeamListComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
