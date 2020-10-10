import React, { Component } from 'react';
import './App.css';
import Favorites from './Components/Favorites';
import FilmList from './Components/FilmList';

class App extends Component {

  state = {
    films: [],
    favorites: []
  }


  componentDidMount(){
    this.getFilms()
  }

  getFilms = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(filmList => this.setState({
        films: filmList
      }))
  }

  addToFavorites = (film) => {
    let foundFilm = this.state.favorites.find(favorite => film.id === favorite.id)

    if(!foundFilm){
      this.setState({
        favorites: [...this.state.favorites, film]
      })
    }
  }

  render(){ 
    return (
      <main className="App">
        <h1>A Ghibli Films App</h1>
        <Favorites favorites={this.state.favorites}/> 
        <FilmList films={this.state.films} clickAction={this.addToFavorites} />
      </main>
    );
  }
}
export default App;
