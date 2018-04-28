import { Customer } from "../../models/crmsystem/customer";
import { Input, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'customerthumbnailviewer.component.html',
    styleUrls: ['customerthumbnailviewer.component.css'],
    selector: 'customerthumbnailviewer-component'
})
class CustomerThumbnailViewer {
    @Input()
    public customerInfo: Customer;

    constructor() {
        console.log('Customer Thumbnail Viewer Initialized!');
    }
}

export { CustomerThumbnailViewer };
