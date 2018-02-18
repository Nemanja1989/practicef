import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

    teams;

    constructor() {
        this.teams = [
            {
                name: 'John',
                city: 'Futog',
                email: 'john@example.com'
            },
            {
                name: 'Daniel',
                city: 'Veternik',
                email: 'daniel@example.com'
            },
            {
                name: 'Martin',
                city: 'Vukojebina',
                email: 'martin@example.com'
            },
            {
                name: 'Martin',
                city: 'Begec',
                email: 'martin@example.com'
            },
            {
                name: 'Nemanja',
                city: 'Novi Sad',
                email: 'nemanjabojanic@example.com'
            }
        ];

    }

    ngOnInit() {
    }

}
