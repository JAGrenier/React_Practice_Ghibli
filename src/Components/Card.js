import React from 'react'

export default function Card({film, clickAction}) {

    function handleClick(){
        clickAction(film)
    }

    return (
        <li className="card" onClick={handleClick}>
            <h2>{film.title}</h2>
            <h3>{film.release_date}</h3>
            <p>RT Score: {film.rt_score}</p>
            <button onClick={handleClick}>Add to Favs</button>
        </li>
    )
}
