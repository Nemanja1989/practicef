import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'teamsList'
})
export class TeamsListPipe implements PipeTransform {

    // this will search for contact firstName
    transform(array: any[], searchTerm?: any): any {
        // hack for delete after filter
        if (!searchTerm) {
            return array;
        }
        searchTerm = searchTerm.toLowerCase();

        // not good solution because you can't delete after this
        return array.filter(function (item) {
            return item.name.toLowerCase().includes(searchTerm);
        });
    }

}
