import {Component} from '@angular/core';
import { IcSectionContainer, IcTypography } from '@ukic/angular-community-supported/standalone';

@Component({
    imports: [IcSectionContainer, IcTypography],
    template: `
        <ic-section-container>
            <ic-typography>Page A content</ic-typography>
        </ic-section-container>
    `
})
export class PageA {
    
}