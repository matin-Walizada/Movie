import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { IMovielnfo } from '../model/imovielnfo';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor() { }

  private movies: IMovielnfo[] = [
    { movieID: '1', image: 'assets/img/movie1.jpg', name: 'Movie 1', times: ['12:00', '15:00', '18:00'] },
    { movieID: '2', image: 'assets/img/movie2.jpg', name: 'Movie 2', times: ['13:00', '16:00', '19:00'] },
    { movieID: '3', image: 'assets/img/movie3.jpg', name: 'Movie 3', times: ['14:00', '17:00', '20:00'] },
    { movieID: '4', image: 'assets/img/movie4.jpg', name: 'Movie 4', times: ['11:00', '14:00', '17:00'] }
  ];

  getMoviesList(): Observable<IMovielnfo[]> {
    return of(this.movies);
  }
}
