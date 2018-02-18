export class Team {

    id;
    name;
    city;
    email;

    constructor( id: number , name: string, city: string,  email: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.email = email;
    }
}
