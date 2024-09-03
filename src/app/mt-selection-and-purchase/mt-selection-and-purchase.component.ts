import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Purchasenfo } from '../model/purchasenfo';
import { IMovielnfo } from '../model/imovielnfo';

@Component({
  selector: 'app-mt-selection-and-purchase',
  templateUrl: './mt-selection-and-purchase.component.html',
  styleUrls: ['./mt-selection-and-purchase.component.css']
})
export class MtSelectionAndPurchaseComponent implements OnInit {
  movieSelectionForm: FormGroup;
  movies: IMovielnfo[] = [];
  selectedMovie?: IMovielnfo;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movieSelectionForm = this.fb.group({
      movieName: ['', Validators.required],
      movieTime: ['', Validators.required],
      numberOfTickets: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$|^\d{5} \d{4}$/)]],
      ccNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cExpiration: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      ccCvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  ngOnInit(): void {
    this.dataService.getMoviesList().subscribe(movies => this.movies = movies);
  }

  onChangeMovieName() {
    const selectedMovieId = this.movieSelectionForm.get('movieName')?.value;
    this.selectedMovie = this.movies.find(movie => movie.movieID === selectedMovieId);
    
    if (this.selectedMovie) {
      this.movieSelectionForm.get('movieTime')?.setValue('');
      this.movieSelectionForm.get('numberOfTickets')?.setValue('');
    }
  }

  onChangeMovieTime() {
    const selectedTime = this.movieSelectionForm.get('movieTime')?.value;
    console.log('Selected Movie Time:', selectedTime);
  }

  onSubmit(): void {
    if (this.movieSelectionForm.valid) {
      const formData = this.movieSelectionForm.value;

      // Prepare data for navigation
      const navigationExtras = {
        state: {
          purchaseInfo: formData,
          selectedMovie: this.selectedMovie
        }
      };

      // Navigate to ticket review page
      this.router.navigate(['/ticket-review'], navigationExtras);
    }
  }

  onReset() {
    this.movieSelectionForm.reset();
    this.selectedMovie = undefined;
  }
}