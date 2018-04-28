import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'followme.component.html',
    styleUrls: ['followme.component.css'],
    selector: 'followme-component'
})
class FollowmeComponent {
    constructor() {
        console.log('Followme component initialized!');
    }
}

export { FollowmeComponent };