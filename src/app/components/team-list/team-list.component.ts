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

    constructor() {
        this.teams = TeamsService.getTeams();

    }

    ngOnInit() {
    }

    removeTeam(team) {
        let index = this.teams.indexOf(team);
              this.teams.splice(index, 1);
    }

}
