import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular Core Deep Dive'
  }

  title = 'angular-course';

  public onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  public onLogoClicked(newTitle: string) {
    alert('Logo clicked');
  }
}
