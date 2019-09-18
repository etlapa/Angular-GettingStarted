import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //It's using Back Tricks for multi line writting
  template: `
      <div>
        <h1>{{pageTitle}}</h1>
        <h3>{{note}}</h3>
        <tbl-list-products></tbl-list-products>
      </div>
    `
})

export class AppComponent{
  pageTitle: string = 'Table Component Title';
  note: string = 'with awful html 4.0';
}