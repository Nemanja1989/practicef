import {Injectable} from '@angular/core';

@Injectable()
export class TeamsService {

    private teams;
    private idCount;

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

        // get bigest ID
        for (let i = 0; i <= this.teams.length - 1; i++) {
            if (this.teams[i]['id'] > this.idCount) {
                this.idCount = this.teams[i]['id'];
            }
        }
    }

    getTeams() {
        return this.teams;
    }

    addTeam(team) {
        team['id'] = this.idCount++;
                this.teams.push(team);
    }

}
