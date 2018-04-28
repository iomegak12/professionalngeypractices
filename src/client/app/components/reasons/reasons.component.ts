import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'reasons.component.html',
    styleUrls: ['reasons.component.css'],
    selector: 'reasons-component'
})
class ReasonsComponent {
    constructor() {
        console.log('Reasons component initialized!');
    }
}

export { ReasonsComponent };