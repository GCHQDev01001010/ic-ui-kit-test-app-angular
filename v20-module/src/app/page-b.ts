import {Component} from '@angular/core';

@Component({
    template: `
        <ic-card-vertical>
            <ic-typography>
                <h3 slot="heading">Test Card</h3>
                <p slot="message">Page B content</p>
            </ic-typography>
        </ic-card-vertical>
    `,
    standalone: false
})
export class PageB {
    
}