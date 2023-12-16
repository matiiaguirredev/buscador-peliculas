import { useState } from "react"

export const BuscadorPeliculas = () => {

    const urlBase = "https://api.themoviedb.org/3/search/movie"
    const KEY_URL = "INSERT_YOUR_API_KEY"

    const [busqueda, setBusqueda] = useState('')

    const [peliculas, setPeliculas] = useState([])

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try{
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${KEY_URL}`)
            const data = await response.json()
            setPeliculas(data.results)
        }catch(err){
            console.error("A ocurrido un error: " , err)
        }
    }

    return (
    <div className="container">
        <h1 className="title">Buscador de Peliculas</h1>
        <form onSubmit={handleSubmit}>
            <input value={busqueda} onChange={handleInputChange} type="text" />
            <button className="search-button" type="submit">Buscar</button>
        </form>
    
        <div className="movie-list">
            {peliculas.map((pelicula) => (
                <div key={pelicula.id} className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title}/>
                    <h2>{pelicula.title}</h2>
                    <p>{pelicula.overview}</p>
                </div>
            ))}
        </div>
    </div>
    )
}
