import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Trending.css'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/CustomPaginations/CustomPagination'

const Trending = () => {
          // console.log(`${process.env.REACT_APP_API_KEY}`)
          const [page, setPage] = useState(1)
          const [content , setContent] = useState([]);
          const featchTrending = async () => {
                    const  {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
                    setContent(data.results); // Data Set in useState 
                    // console.log(data)
               
          
          }
          useEffect(() =>{
                    featchTrending();
                    // eslint-disable-next-line
          },[page])
          // This code is fired one agine
          // console.log(content)
          return (
                    <div>
                              <span className="pageTitle">Trending</span>
                              <div className="trending">
                                        {
                                                  content&&content.map((item)=>{
                                                            return <SingleContent 
                                                            key={item.id}
                                                            id={item.id}
                                                            // item={item}
                                                            poster={item.poster_path}
                                                            title={item.title || item.name}
                                                            date={item.first_air_date || item.release_date}
                                                            media_type={item.media_type}
                                                            vote_average={item.vote_average}
                                                            />
                                                  })
                                        }
                              </div>
                              <CustomPagination setPage={setPage}/>
                    </div>
          )
}

export default Trending
