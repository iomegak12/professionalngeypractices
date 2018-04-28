import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css'],
    selector: 'layout-component'
})
class LayoutComponent {
    constructor() {
        console.log('Layout component initialized!');
    }
}

export { LayoutComponent };