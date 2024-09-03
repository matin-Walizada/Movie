import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mt-landing',
  templateUrl: './mt-landing.component.html',
  styleUrl: './mt-landing.component.css'
})
export class MtLandingComponent {

  constructor(private router: Router){

  }



  navigateToSelection() {
    this.router.navigate(['/movie-selection']);
  }



}
