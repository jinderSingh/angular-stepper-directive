import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `Welcome to home`,
    styles: []
})
export class HomeComponent implements OnInit {


    ngOnInit(): void {
        console.log('init home');
    }

}
