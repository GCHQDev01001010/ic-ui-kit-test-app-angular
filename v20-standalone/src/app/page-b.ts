import {Component} from '@angular/core';

import { IcCardVertical, IcTypography } from '@ukic/angular/standalone';

@Component({
    imports: [IcCardVertical, IcTypography],
    template: `
        <ic-card-vertical>
            <ic-typography>
                <h3 slot="heading">Test Card</h3>
                <p slot="message">Page B content</p>
            </ic-typography>
        </ic-card-vertical>
    `
})
export class PageB {
    
}