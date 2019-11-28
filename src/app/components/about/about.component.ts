import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: `{{title}}`,
    styles: []
})
export class AboutComponent implements OnInit {

    title = 'About';

    ngOnInit(): void {
        console.log('about init');

        setTimeout(() => this.title = 'About updatedd ', 2000);
    }

}
