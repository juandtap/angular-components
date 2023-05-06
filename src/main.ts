import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, RightSideBarComponent],
  templateUrl: './main.html',
  //styleUrls:['./main.css'],
})
export class App {
  
}

bootstrapApplication(App);
