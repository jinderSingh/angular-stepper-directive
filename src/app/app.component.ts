import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'stepper';

  formGroup: FormGroup = new FormGroup({
    home: new FormControl(''),
    about: new FormControl(''),
  });

}
