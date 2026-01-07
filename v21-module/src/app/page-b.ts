import {Component} from '@angular/core';

@Component({
    template: `
        <ic-card-vertical>
            <ic-typography>
                < slot="heading">Test Card</h3>
                <p slot="message">Page B content</p>
            </ic-typography>
        </ic-card-vertical>
    `
})
export class PageB {
    
}