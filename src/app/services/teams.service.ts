import {Injectable} from '@angular/core';

@Injectable()
export class TeamsService {

    constructor() {
    }

    static getTeams() {
        return [
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


}
