import React from 'react'
import Card from "./Card"

export default function FilmList({films, clickAction}) {

    const showFilms =() => films.map(film => <Card film={film} clickAction={clickAction} />)

    return (
        <ul className="film-list">
            {showFilms()}
        </ul>
    )
}
