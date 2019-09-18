import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //It's using Back Tricks for multi line writting
  template: `
      <div>
        <h1>{{pageTitle}}</h1>
        <div>html template in @Component</div>
      </div>
    `
})

export class AppComponent{
  pageTitle: string = 'Component title';
}