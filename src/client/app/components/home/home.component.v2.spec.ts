import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { FaqComponent } from '../faq/faq.component';
import { ReasonsComponent } from '../reasons/reasons.component';
import { SocialComponent } from '../social/social.component';

function main() {
    describe('Home Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    HomeComponent,
                    FaqComponent, ReasonsComponent, SocialComponent]
            });
        });

        it('Should Home Component Render Body Header Awesome!', async(() => {
            TestBed.compileComponents()
                .then(
                    result => {
                        let fixture = TestBed.createComponent(HomeComponent);
                        let domElement = fixture.debugElement.nativeElement;
                        let expectedLeadContent = 'AWESOME, CUSTOMIZABLE, FREE';
                        let actualLeadContent = domElement.querySelectorAll('.lead')[0].textContent;

                        expect(actualLeadContent).toBe(expectedLeadContent);
                    });
        }));

        afterEach(() => {
            console.log('Test Cleanup Completed ...');
        });
    });
}

export { main };
