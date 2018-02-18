import {Component, OnInit} from '@angular/core';
import {Team} from '../../models/team';
import {TeamsService} from '../../services/teams.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-team',
    templateUrl: './add-team.component.html',
    styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

    ngOnInit() {
    }

    private team: Team;

    constructor(private _teamService: TeamsService,
                private router: Router
    ) {
        // create empty team because of ngModel in form
        this.team = new Team();
    }

    submit() {
        this._teamService.addTeam(this.team);
        this.router.navigate(['/teams']);
    }

}



