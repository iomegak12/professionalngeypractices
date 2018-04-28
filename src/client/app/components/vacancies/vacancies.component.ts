import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'vacancies.component.html',
    styleUrls: ['vacancies.component.css'],
    selector: 'vacancies-component'
})
class VacanciesComponent {
    constructor() {
        console.log('Vacancies component initialized!');
    }
}

export { VacanciesComponent };