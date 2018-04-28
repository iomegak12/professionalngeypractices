import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'social.component.html',
    styleUrls: ['social.component.css'],
    selector: 'social-component'
})
class SocialComponent {
    constructor() {
        console.log('Social component initialized!');
    }
}

export { SocialComponent };