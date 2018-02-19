import {Component, Injector, OnInit} from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {TeamsListPipe} from '../../pipes/teams-list.pipe';
import {HttpErrorResponse} from '@angular/common/http';
import {Team} from '../../models/team';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

    teams;
    searchTerm: string;
    private _teamService: TeamsService;

    constructor(private injector: Injector) {
    }

    ngOnInit() {
        this._teamService = this.injector.get(TeamsService);
        this.teams = this._teamService.getTeams().subscribe(
            data => {
                this.teams = data;
            },
            (err: HttpErrorResponse) => {
                alert(`Backend returned code ${err.status} with message: ${err.error}`);
            }
        );
    }

    removeTeam(team) {
        let index = this.teams.indexOf(team);
              this.teams.splice(index, 1);
    }

    showPreview(team) {
        alert(`
             Name: ${team.name},
             City: ${team.city},
             Email: ${team.email}
         `);
    }

}
