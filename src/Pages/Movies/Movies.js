import React, {useState,useEffect} from 'react'
import axios from 'axios'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/CustomPaginations/CustomPagination'
import './Movies.css'
import useGenre from "../../hooks/useGenre";
import Genres from '../../components/Genres/Genres'
const Movies = () => {
          const [genres, setGenres] = useState([]);
          const [selectedGenres, setSelectedGenres] = useState([]);
          const [page, setPage]= useState(1)
          const [content, setContent] = useState([])
          const [numOfPages, setNumOfPages] = useState(0)
          const genreforURL = useGenre(selectedGenres);
          const featchMovies = async() =>{
                    const {data} = await axios.get(`
                    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`)
                    // data.media_type="movie"
                    setContent(data.results);
                    setNumOfPages(data.total_pages)
          }

          useEffect (()=>{
                    featchMovies();
                    // eslint-disable-next-line
          },[genreforURL,page])


          return (
                    <div>
                              <span className="pageTitle">Movies</span>
                              <Genres
                                        type="movie"
                                        selectedGenres={selectedGenres}
                                        setSelectedGenres={setSelectedGenres}
                                        genres={genres}
                                        setGenres={setGenres}
                                        setPage={setPage}
                              />
                              <div className="movies">
                                        {
                                                  content&&content.map((item)=>{
                                                            return <SingleContent 
                                                            key={item.id}
                                                            id={item.id}
                                                            // media_type="movie"
                                                            // item={item}
                                                            // media_type={"movie"}
                                                            eslint-disable-next-line
                                                            poster={item.poster_path}
                                                            title={item.title || item.name}
                                                            date={item.first_air_date || item.release_date}
                                                            media_type="movie"
                                                            vote_average={item.vote_average}
                                                            />
                                                  })
                                        }
                              </div>
                              {numOfPages>1&&(<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
                              
                    </div>
          )
}

export default Movies
