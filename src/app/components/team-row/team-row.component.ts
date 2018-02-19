import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Team} from '../../models/team';

@Component({
    selector: '[teamRow]',
    templateUrl: './team-row.component.html',
    styleUrls: ['./team-row.component.css']
})
export class TeamRowComponent implements OnInit {

    public team: Team;

    @Input()
    set teamRow(team: Team) {
        this.team = team;
    }

    @Output() onPreview = new EventEmitter<Team>();
    @Output() onRemove = new EventEmitter<Team>();

    constructor() {
    }

    ngOnInit() {
    }

    showPreview(team: Team) {
        this.onPreview.emit(team);
    }

    removeTeam(team: Team) {
        this.onRemove.emit(team);
    }

}
