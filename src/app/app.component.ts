import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    switchTemplate = false;
    closeTemplate = true;

    constructor() {
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            // console.log(this.closeTemplate)
            this.closeTemplate = !this.closeTemplate;
            // console.log('3000')
        }, 3000);
        setTimeout(() => {
            // this.switchTemplate = !this.switchTemplate;
            // or
            // console.log(this.closeTemplate)

            this.closeTemplate = !this.closeTemplate;
            // console.log('6000')
        }, 4000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // console.log(this.closeTemplate)

            // or
            // console.log('9000')
            this.closeTemplate = !this.closeTemplate;
            // console.log(this.closeTemplate)
        }, 9000);
    }
}
