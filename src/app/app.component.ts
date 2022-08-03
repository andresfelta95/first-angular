import { Component } from '@angular/core';

type Movie = {
  name: string,
  available: number,
  quantity: number
};
type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Movies';
  movies: Movies = [
    {
      name: "Thor Love & Thunder",
      available: 10,
      quantity: 0
    },
    {
      name: "Minions",
      available: 50,
      quantity: 0
    }
  ];
  addMovieQuantity(movieName: string){
    const movieIndex = this.movies.findIndex(movie => movie.name === movieName);
    this.movies[movieIndex].quantity++;
  }
  removeMovieQuantity(movieName: string){
    const movieIndex = this.movies.findIndex(movie => movie.name === movieName);
    this.movies[movieIndex].quantity--;
  }
}
