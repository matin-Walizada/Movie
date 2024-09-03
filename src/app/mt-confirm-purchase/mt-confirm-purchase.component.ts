import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mt-confirm-purchase',
  templateUrl: './mt-confirm-purchase.component.html',
  styleUrl: './mt-confirm-purchase.component.css'
})
export class MtConfirmPurchaseComponent {
  confirmationNumber?: string;
  movieName?: string;
  numberOfTickets?: number;
  movieImage?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { confirmationNumber: string, movieName: string, numberOfTickets: number, movieImage: string };

    if (state) {
      this.confirmationNumber = state.confirmationNumber;
      this.movieName = state.movieName;
      this.numberOfTickets = state.numberOfTickets;
      this.movieImage = state.movieImage;
    }
  }

  navigateToLanding() {
    this.router.navigate(['/']);
  }
}
