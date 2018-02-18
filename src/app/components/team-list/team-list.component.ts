import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {TeamsListPipe} from '../../pipes/teams-list.pipe';


@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

    teams;
    searchTerm: string;

    constructor(private _teamService: TeamsService ) {
        this.teams = _teamService.getTeams();

    }

    ngOnInit() {
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
