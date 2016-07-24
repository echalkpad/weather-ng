import { Component } from '@angular/core';

import { RainComponent } from './+rain/rain.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [RainComponent]
})
export class AppComponent {
  title = 'Weather Station';
}
