import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'aboutus.component.html',
    styleUrls: ['aboutus.component.css'],
    selector: 'aboutus-component'
})
class AboutUsComponent {
    constructor() {
        console.log('AboutUs component initialized!');
    }
}

export { AboutUsComponent };