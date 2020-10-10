import React from 'react'
import Card from "./Card"

export default function Favorites({favorites, clickAction}) {

    const showFilms =() => favorites.map(film => <Card film={film} clickAction={clickAction} />)

    return (
        <ul className="favorites-list">
            {showFilms()}
        </ul>
    )
}
