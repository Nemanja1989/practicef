import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {TeamListComponent} from '../components/team-list/team-list.component';
import {PlayersComponent} from '../components/players/players.component';
import {AddTeamComponent} from '../components/add-team/add-team.component';

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
    },
    {
        path: 'addTeam',
        component: AddTeamComponent
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
