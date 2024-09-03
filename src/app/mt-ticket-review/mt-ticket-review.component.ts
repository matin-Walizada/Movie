import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovielnfo } from '../model/imovielnfo';
import { Purchasenfo } from '../model/purchasenfo';

@Component({
  selector: 'app-mt-ticket-review',
  templateUrl: './mt-ticket-review.component.html',
  styleUrls: ['./mt-ticket-review.component.css']
})
export class MtTicketReviewComponent implements OnInit {
  selectedMovie?: IMovielnfo;
  selectedMovieTime: string = '';
  purchaseInfo!: Purchasenfo;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    // Example logic to load data from route or service
    this.route.data.subscribe(data => {
      this.selectedMovie = data['selectedMovie'];
      this.selectedMovieTime = data['selectedMovieTime'] || '';
      this.purchaseInfo.numberOfTickets = data['numberOfTickets'] || '';
      this.purchaseInfo = data['purchaseInfo'];
    });
  }

  confirmPurchase(): void {
    if (this.selectedMovie && this.purchaseInfo) {
      console.log('Confirming purchase for:', this.selectedMovie, this.purchaseInfo);
      this.router.navigate(['/confirmation']);
    } else {
      console.error('Missing required data for purchase confirmation.');
    }
  }

  chooseDifferentMovie(): void {
    this.router.navigate(['/movie-selection']);
  }
}
