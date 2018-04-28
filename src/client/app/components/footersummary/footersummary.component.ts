import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'footersummary.component.html',
    styleUrls: ['footersummary.component.css'],
    selector: 'footersummary-component'
})
class FooterSummaryComponent {
    constructor() {
        console.log('FooterSummary component initialized!');
    }
}

export { FooterSummaryComponent };