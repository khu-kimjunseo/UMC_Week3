import React, { useEffect, useRef, useState } from 'react'
import Movie from './Movie/Movie'
// import { movies } from './movieDummy'
import { Provider, useDispatch, useSelector } from 'react-redux'
import * as M from '../../Group.style'
import axios from 'axios'
import store from '../../../store'

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0)
  const mounted = useRef(false);
  async function fetchData() {
      const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`
      try {
        setLoading(true)
        console.log(new Date())
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
                'accept': 'application/json'
            }
        })
        console.log(res.data)
        setMovies([...movies, ...res.data.results])
        preventRef.current = true
        setLoading(false)
      } catch(err){
        console.error(err)
      }
  }
  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
    }
    else{
      fetchData();
    }
  }, [page])

  //Infinite Scroll
  const [loading, setLoading] = useState(false)
  const target = useRef(null);
  const preventRef = useRef(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!loading && entry.isIntersecting && preventRef.current) {
        preventRef.current = false
        setPage(prev => prev+1)
      }
    }, { threshold: 0 });
    if(target.current)
      observer.observe(target.current);
    // clean-up function
    return () => { observer.disconnect(); }
  }, [])

  return (
    <div>
      <M.GroupWrap>
        {movies.map((item) => {
          return (
            <Movie key={item.id} title={item.title}
              rate={item.vote_average} url={item.poster_path} overview={item.overview}
            ></Movie>
            )
          })
        }
      </M.GroupWrap>
      <div style={{'height': '100px', 'border': 'solid red 1px'}} ref={target}>{loading ? 'Loading...' : 'Observer'}</div>
    </div>
  )
}
